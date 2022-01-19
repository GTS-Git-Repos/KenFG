import React from 'react';
import {useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../../store/selectors';
import PrivateContestCreateScreen from './private.contest.create.screen';
import {useGetTeams, usePrivateContestList} from './private.contest.workers';

export default function PrivateContestCreateHOC() {
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);

  const {contests, contestsAPI, contestAPILive, refetch} =
    usePrivateContestList(matchSelector.match_key, userSelector.mobile);

  const {teams} = useGetTeams(matchSelector.match_key, userSelector.mobile);

  function joinRequestPrivateContest(contest_key: string) {
    try {
      const contest = contests.find((item: any) => item.pc_id === contest_key);
      if (!contests) {
        throw 'no contest found';
      }
      // console.log(contest);
      console.log(teams);
    } catch (err) {
      console.log('joinRequestPrivateContest', joinRequestPrivateContest);
    }
  }

  return (
    <PrivateContestCreateScreen
      contests={contests}
      contestsAPI={contestsAPI}
      contestAPILive={contestAPILive}
      refetch={refetch}
      joinRequestPrivateContest={joinRequestPrivateContest}
    />
  );
}
