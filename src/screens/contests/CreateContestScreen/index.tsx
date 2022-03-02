import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {joinContestRequestAction} from '../../../store/actions/appActions';
import {
  isFullMatchSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import PrivateContestCreateScreen from './private.contest.create.screen';
import {usePrivateContestList} from './private.contest.workers';
import {useGetTeams} from '../../../shared_hooks/contest.hooks';
import {toTeamFormationWithAutoJoin} from '../../../store/actions/navigationActions';

export default function PrivateContestCreateHOC() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isFullMatch = useSelector(isFullMatchSelector);

  const {teams}: any = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  const {contests, contestsAPI, contestAPILive, refetch} =
    usePrivateContestList(matchSelector.match_key, userSelector.mobile);

  function onPressContestCard(contest_key: string) {
    console.log(1);
  }

  function onPressContestShare(contest_key: string) {
    console.log(1);
  }

  function joinContest(contest_key: string) {
    const contest = contests.find((item: any) => item.key === contest_key);
    if (contest) {
      console.log(contest);
      // toTeamFormationWithAutoJoin(navigation, teams.length, {
      //   contestKey: contest_key,
      //   entryAmount: contest.entry,
      //   maxTeam: contest.max_entry,
      // });
    }
    return;
  }

  return (
    <PrivateContestCreateScreen
      contests={contests}
      contestsAPI={contestsAPI}
      contestAPILive={contestAPILive}
      refetch={refetch}
      joinContest={joinContest}
      wallet={userSelector.un_utilized}
      onPressContestCard={onPressContestCard}
      onPressContestShare={onPressContestShare}
    />
  );
}
