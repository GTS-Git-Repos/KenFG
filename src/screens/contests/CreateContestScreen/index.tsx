import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useReducer, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  isFullMatchSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import CreateContestScreen from './create.contest.screen';
import {
  State,
  Reducer,
  usersContestsSelector,
  allContestsSelector,
  updateContests,
  updateUserId,
} from './create.contest.controller';

import {
  useGetTeams,
  usePrivateContestList,
} from '../../../shared_hooks/contest.hooks';
import {toTeamFormationWithAutoJoin} from '../../../store/actions/navigationActions';

export default function CreateContestHOC() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [contestState, contestDispatch] = useReducer(Reducer, State);

  // redux selectors
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isFullMatch = useSelector(isFullMatchSelector);

  // useReducer selectors
  const userContests = usersContestsSelector(contestState);

  // the selected contest will be shown for share contest
  const [selContest, setSelContest] = useState(null);

  const {teams}: any = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  // const {contests, contestsAPI, contestAPILive, refetch} =
  //   usePrivateContestList(matchSelector.match_key, userSelector.mobile);

  const {p_ctst, p_ctst_e, rfp_ctst} = usePrivateContestList(
    matchSelector.match_key,
    userSelector.mobile,
  );

  useEffect(() => {
    // console.log(p_ctst);

    if (p_ctst) {
      contestDispatch(updateContests(p_ctst)); 
    }
  }, [p_ctst]);

  function onPressContestCard(contest_key: string) {
    console.log(1);
  }

  function onPressShareContest(contest_key: string) {
    console.log(contest_key);
  }

  function joinContest(contest_key: string) {
    try {
      const contest = p_ctst.find((item: any) => item.key === contest_key);
      if (!contest) {
        throw new Error('no conest found');
      }
      if (contest) {
        console.log(contest);
      }
    } catch (err) {
      console.log(err);
    }

    return;
  }

  return (
    <CreateContestScreen
      userContests={userContests}
      err={p_ctst_e}
      selected_contest={selContest}
      refetch={rfp_ctst}
      onPressContestCard={onPressContestCard}
      onPressShareContest={onPressShareContest}
      wallet_amount={userSelector.un_utilized}
    />
  );
}
