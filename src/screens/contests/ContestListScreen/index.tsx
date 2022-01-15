import React, {useEffect} from 'react';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import {contestListsRemote} from '../../../remote/matchesRemote';
import {selectedMatch, userInfo} from '../../../store/selectors';
import ContestListScreen from './contest.list.screen';
import ContestScreenLoading from './atoms/screen.loading.contest';
import {
  useContestList,
  useJoinedContests,
  useGetTeams,
} from './contest.workers';
import {useIsScreenReady} from '../../../utils/customHoooks';

export default function ContestListHOC() {
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isScreenReady = useIsScreenReady();

  const {contests, contestsAPI} = useContestList(matchSelector.match_key);
  const {joined, joinedAPI} = useJoinedContests(
    matchSelector.match_key,
    userSelector.mobile,
  );
  const {teams, teamsAPI} = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
  );

  useEffect(() => {
    if (contests) {
      // console.log(contests);
    }
  }, []);

  if (!isScreenReady || !contestsAPI) {
    return <ContestScreenLoading title={''} />;
  }

  return (
    <ContestListScreen
      contests={contests}
      contestsAPI={contestsAPI}
      joined={joined}
      joinedAPI={joinedAPI}
      teams={teams}
      teamsAPI={teamsAPI}
    />
  );
}
