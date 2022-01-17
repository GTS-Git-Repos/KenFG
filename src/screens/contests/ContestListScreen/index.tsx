import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../../store/selectors';
import ContestListScreen from './contest.list.screen';
import ContestScreenLoading from './atoms/screen.loading.contest';
import {
  useContestList,
  useJoinedContests,
  useGetTeams,
} from './contest.workers';
import {useCountDown, useIsScreenReady} from '../../../utils/customHoooks';

export default function ContestListHOC() {
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isScreenReady = useIsScreenReady();
  // const countDown = useCountDown(matchSelector.start_at, false);

  const {contests, contestsAPI} = useContestList(matchSelector.match_key);
  const {joined, joinedAPI, joinedAPILive} = useJoinedContests(
    matchSelector.match_key,
    userSelector.mobile,
  );
  const {teams, teamsAPI, teamsAPILive} = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
  );

  useEffect(() => {
    if (joined) {
      // console.log('>>>', JSON.stringify(joined));
    }
  }, [joined]);

  if (!isScreenReady || !contestsAPI) {
    return <ContestScreenLoading title={''} />;
  }

  return (
    <ContestListScreen
      contests={contests}
      contestsAPI={contestsAPI}
      joined={joined}
      joinedAPI={joinedAPI}
      joinedAPILive={joinedAPILive}
      teams={teams}
      teamsAPI={teamsAPI}
      teamsAPILive={teamsAPILive}
    />
  );
}
