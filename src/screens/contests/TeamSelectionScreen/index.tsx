import React, {useEffect, useReducer, useState} from 'react';
import TeamSelectionScreen from './team.selection.screen';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  isFullMatchSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {useSelector} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {
  useGetTeams,
  useJoinedContests,
} from '../../../shared_hooks/contest.hooks';
import {LoadingSpinner} from '../../../sharedComponents';
import {
  selectTeamsState,
  selectTeamsReducer,
  teamSelectTextSelector,
  selectedTeamsSelector,
} from './team.selection.controller';
import {toTeamPreview} from '../../../store/actions/navigationActions';

export default function TeamSelectionHOC() {
  const route = useRoute();
  const navigation = useNavigation();
  const [TeamsState, dispatchTeamsState] = useReducer(
    selectTeamsReducer,
    selectTeamsState,
  );

  const userMeta: any = useSelector(userInfo);
  const matchSelector: any = useSelector(selectedMatch);
  const isFullMatch: any = useSelector(isFullMatchSelector);

  const selectText = teamSelectTextSelector(TeamsState);

  // const selectedTeams = selectedTeamsSelector(TeamsState);

  const isScreenReady = useIsScreenReady();
  const [showJoinModal, setShowJoinModal] = useState(false);

  const {teams}: any = useGetTeams(
    matchSelector.match_key,
    userMeta?.mobile,
    isFullMatch,
  );
  const {joined}: any = useJoinedContests(
    matchSelector.match_key,
    userMeta.mobile,
    isFullMatch,
  );

  const [availableTeams, setAvailableTeams] = useState<any>([]);
  const [unavailableTeams, setUnavailableTeams] = useState<any>([]);

  useEffect(() => {
    const maxTeam = parseInt(matchSelector.joinContest.maxTeam);
    dispatchTeamsState({type: 'UPDATE_MAX_TEAM_COUNT', payload: maxTeam});
  }, []);

  useEffect(() => {
    if (teams) {
      dispatchTeamsState({type: 'UPDATE_AVAILABLE_TEAMS', payload: teams});
    }
    if (joined) {
      dispatchTeamsState({type: 'UPDATE_JOINED_CONTEST', payload: joined});
    }
  }, [teams, joined]);

  useEffect(() => {
    if (teams) {
      const AllTeamsKeys = teams.map((item: any) => item.team_key);
      if (!joined) {
        // contest did not joined before, so all teams are availble
        const availableTeams = [];
        for (const a_team_key of AllTeamsKeys) {
          const teamData = teams.find(
            (item: any) => item.team_key === a_team_key,
          );
          if (teamData) {
            availableTeams.push(teamData);
          }
        }
        dispatchTeamsState({
          type: 'UPDATE_AVAILABLE_TEAMS',
          payload: availableTeams,
        });

        setAvailableTeams(availableTeams);
        return;
      }
      // get contest info from Joined contests
      const isJoined = joined.find(
        (item: any) =>
          item.contestMeta.contest_code ===
          matchSelector.joinContest.contestKey,
      );
      if (isJoined) {
        const joinedTeamsKeys: Array<string> =
          isJoined.contestMeta.contest_team;

        const availableTeamsKey = [];
        const unAvailableTeamsKey = [];
        // extract available and unavailble teams key
        for (const teamKey of AllTeamsKeys) {
          if (joinedTeamsKeys.includes(teamKey)) {
            unAvailableTeamsKey.push(teamKey);
          } else {
            availableTeamsKey.push(teamKey);
          }
        }
        // get the Teams data from teams keys
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
        // update state
        setAvailableTeams(availableTeams);
        setUnavailableTeams(unAvailableTeams);
      } else {
        setAvailableTeams(teams);
      }
    }
  }, [teams]);

  function teamCardPress(team_key: string) {
    const team = teams.find((item: any) => item.team_key === team_key);
    if (team) {
      toTeamPreview(navigation, team);
    }
  }

  if (!isScreenReady || !teams) {
    return <LoadingSpinner title={'Select Team'} />;
  }

  return (
    <TeamSelectionScreen
      maxTeams={matchSelector.joinContest.maxTeam}
      selectText={selectText}
      teams={teams}
      showJoinModal={showJoinModal}
      setShowJoinModal={setShowJoinModal}
      unavailableTeams={unavailableTeams}
      availableTeams={availableTeams}
      // selectedTeams={selectedTeams}
      teamCardPress={teamCardPress}
      userMeta={userMeta}
      // selectAllPress={selectAllPress}
    />
  );
}
