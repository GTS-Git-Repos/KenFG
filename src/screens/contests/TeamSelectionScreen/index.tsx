import React, {useEffect, useState} from 'react';
import TeamSelectionScreen from './team.selection.screen';
import {useRoute} from '@react-navigation/native';
import {selectedMatch, userInfo} from '../../../store/selectors';
import {useSelector} from 'react-redux';
import {getJoinedTeamsRemote} from '../../../remote/matchesRemote';
import {useQuery} from 'react-query';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {
  useGetTeams,
  useJoinedContests,
} from '../../../shared_hooks/contest.hooks';
import {LoadingSpinner} from '../../../sharedComponents';

export default function TeamSelectionHOC() {
  const route = useRoute();

  const userMeta: any = useSelector(userInfo);
  const matchSelector: any = useSelector(selectedMatch);
  const isScreenReady = useIsScreenReady();
  const [showJoinModal, setShowJoinModal] = useState(false);

  const {teams}: any = useGetTeams(matchSelector.match_key, userMeta?.mobile);
  const {joined}: any = useJoinedContests(
    matchSelector.match_key,
    userMeta.mobile,
  );

  const [availableTeams, setAvailableTeams] = useState<any>([]);
  const [unavailableTeams, setUnavailableTeams] = useState<any>([]);

  useEffect(() => {
    if (teams) {
      const isJoined = joined.find(
        (item: any) =>
          item.contestMeta.contest_code ===
          matchSelector.joinContest.contestKey,
      );
      if (isJoined) {
        const joinedTeamsKeys = isJoined.contestMeta.contest_team;
        const AllTeamsKeys = teams.map((item: any) => item.team_key);
        const availableTeamsKey = [];
        const unAvailableTeamsKey = [];
        for (const teamKey of AllTeamsKeys) {
          if (joinedTeamsKeys.includes(teamKey)) {
            unAvailableTeamsKey.push(teamKey);
          } else {
            availableTeamsKey.push(teamKey);
          }
        }
        // get the Teams data
        const availableTeams = [];
        const unAvailableTeams = [];

        for (const a_team_key of availableTeamsKey) {
          const teamData = teams.find(
            (item: any) => item.team_key === a_team_key,
          );
          if (teamData) {
            availableTeams.push(teamData);
          }
        }
        for (const u_team_key of unAvailableTeamsKey) {
          const teamData = teams.find(
            (item: any) => item.team_key === u_team_key,
          );
          if (teamData) {
            unAvailableTeams.push(teamData);
          }
        }
        setAvailableTeams(availableTeams);
        setUnavailableTeams(unAvailableTeams);
      }
    }
  }, [teams]);

  function isTeamSelected() {
    return true;
  }

  if (!isScreenReady || !teams) {
    return <LoadingSpinner title={'Select Team'} />;
  }

  return (
    <TeamSelectionScreen
      teams={teams}
      showJoinModal={showJoinModal}
      setShowJoinModal={setShowJoinModal}
      unavailableTeams={unavailableTeams}
      availableTeams={availableTeams}
    />
  );
}
