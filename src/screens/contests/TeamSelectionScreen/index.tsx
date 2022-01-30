import React, {useEffect, useState} from 'react';
import TeamSelectionScreen from './team.selection.screen';
import {useRoute} from '@react-navigation/native';
import {selectedMatch, userInfo} from '../../../store/selectors';
import {useSelector} from 'react-redux';
import {getJoinedTeamsRemote} from '../../../remote/matchesRemote';
import {useQuery} from 'react-query';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {LoadingSpinner} from '../../../sharedComponents';
import {useJoinedContests} from '../ContestListScreen/contest.workers';

export default function TeamSelectionHOC() {
  const route = useRoute();

  const userMeta: any = useSelector(userInfo);
  const matchSelector: any = useSelector(selectedMatch);
  const isScreenReady = useIsScreenReady();
  const [showJoinModal, setShowJoinModal] = useState(false);

  const [availableTeams, setAvailableTeams] = useState([]);
  const [unavailableTeam, setUnavailableTeam] = useState([]);

  const teams = useQuery(
    ['teams', matchSelector.match_key, userMeta?.mobile],
    getJoinedTeamsRemote,
  );
  const {joined}: any = useJoinedContests(
    matchSelector.match_key,
    userMeta.mobile,
  );

  useEffect(() => {
    if (teams.data) {
      const isJoined = joined.find(
        (item: any) =>
          item.contestMeta.contest_code === matchSelector.contestKey,
      );
      console.log('isJoined', isJoined);

      console.log(matchSelector);
    }
  }, [teams.data]);

  if (!isScreenReady || !teams.data) {
    return <LoadingSpinner title={'Select Team'} />;
  }

  return (
    <TeamSelectionScreen
      teams={teams.data}
      status={teams.status}
      showJoinModal={showJoinModal}
      setShowJoinModal={setShowJoinModal}
    />
  );
}
