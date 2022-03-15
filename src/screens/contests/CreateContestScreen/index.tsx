import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useReducer, useRef, useState} from 'react';
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
import {Modalize} from 'react-native-modalize';

export default function CreateContestHOC() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const shareSheet = useRef<Modalize>(null);
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

  const {p_ctst, p_ctst_f, p_ctst_e, rfp_ctst} = usePrivateContestList(
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
    console.log(contest_key);
  }

  function onPressShareContest(contest_key: string) {
    shareSheet?.current?.open();
    console.log(contest_key);
  }

  function proceedToJoin(contest_key: string) {
    console.log(contest_key);
  }

  return (
    <CreateContestScreen
      userContests={userContests}
      err={p_ctst_e}
      selContest={selContest}
      refetch={rfp_ctst}
      onPressContestCard={onPressContestCard}
      onPressShareContest={onPressShareContest}
      wallet_amount={userSelector.un_utilized}
      proceedToJoin={proceedToJoin}
      isFetching={p_ctst_f}
      shareSheet={shareSheet}
    />
  );
}
