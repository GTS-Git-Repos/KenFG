import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import {Linking, Share} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createTeamKeySelector,
  isFullMatchSelector,
  joinModalSelector,
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
  useJoinedContests,
  usePrivateContestList,
} from '../../../shared_hooks/contest.hooks';
import {toTeamFormationWithAutoJoin} from '../../../store/actions/navigationActions';
import {Modalize} from 'react-native-modalize';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {checksBeforeJoinContest} from '../../../workers/contest.decision';
import {TO_TEAMLIST} from '../../../constants/appContants';
import {updateJoinModalAction} from '../../../store/actions/appActions';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {updateUserInfo} from '../../../store/actions/userAction';

export default function CreateContestHOC() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const shareSheet = useRef<Modalize>(null);
  const [contestState, contestDispatch] = useReducer(Reducer, State);

  // redux selectors
  const matchSelector: any = useSelector(selectedMatch);
  const userMeta: any = useSelector(userInfo);
  const createdTeam: any = useSelector(createTeamKeySelector);
  const joinModal: boolean = useSelector(joinModalSelector);
  const isFullMatch = useSelector(isFullMatchSelector);

  // useReducer selectors
  const userContests = usersContestsSelector(contestState);
  const allContests = allContestsSelector(contestState);
  // the selected contest will be shown for share contest
  const [selContest, setSelContest] = useState(null);
  const [loading, setLoading] = useState(false);

  const {teams}: any = useGetTeams(
    matchSelector.match_key,
    userMeta.mobile,
    isFullMatch,
  );
  const {joined, rfJC}: any = useJoinedContests(
    matchSelector.match_key,
    userMeta.mobile,
    isFullMatch,
  );

  // const {contests, contestsAPI, contestAPILive, refetch} =
  //   usePrivateContestList(matchSelector.match_key, userSelector.mobile);

  const {p_ctst, p_ctst_f, p_ctst_e, rfp_ctst} = usePrivateContestList(
    matchSelector.match_key,
    userMeta.mobile,
  );

  useEffect(() => {
    // console.log(p_ctst);
    contestDispatch(updateUserId(userMeta.mobile));
    if (p_ctst) {
      contestDispatch(updateContests(p_ctst));
    }
  }, [p_ctst]);

  function onPressContestCard(contest_key: string) {
    console.log(contest_key);
  }

  function onPressShareContest(contest_key: string) {
    const contest = p_ctst.find((item: any) => item.key === contest_key);
    if (contest) {
      setSelContest(contest);
      shareSheet?.current?.open();
      console.log(contest);
    }
  }

  function onPressCopy(type: string) {
    if (type === 'sms') {
      console.log(1);
    }
    infoBox('Copied to Clipboard !', 0);
  }

  function onPressSMSShare() {
    Linking.openURL(`sms:?body=${'KenFG sample share content'}`);
  }

  function onEnterShareCode() {
    console.log(1);
  }

  function closeJoinModal() {
    dispatch(updateJoinModalAction(false));
  }

  async function onPressMoreShare() {
    const result = await Share.share({
      message: 'KenFG Sample Share text',
    });
  }

  async function proceedToJoin(contest_key: string) {
    try {
      const contest = allContests.find((item: any) => item.key === contest_key);
      if (!contest) throw 'no contests';
      if (contest) {
        const checkContestJoin = checksBeforeJoinContest(
          matchSelector.start_at,
          contest,
          joined,
          teams,
        );

        if (checkContestJoin.status) {
          toTeamFormationWithAutoJoin(
            navigation,
            checkContestJoin.to === TO_TEAMLIST,
            {
              contestKey: contest.key,
              entryAmount: contest.entry,
              maxTeam: contest.max_entry,
              isFullMatch: contest.innings === '1',
            },
          );
        } else {
          throw checkContestJoin.msg;
        }
        console.log('checkContestJoin', checkContestJoin);
      }
      return;
    } catch (err) {
      console.log('err', err);
    }
    return;
  }

  // async function joinContestWithTeam() {
  //   //TODO: this function never called remove that
  //   try {
  //     // close the join modal popup
  //     closeJoinModal();
  //     const obj = {
  //       match_key: matchSelector.match_key,
  //       contest_key: matchSelector.joinContest.contestKey,
  //       team_key: createdTeam,
  //       player_key: userMeta.mobile,
  //     };
  //     setLoading(true);
  //     const response = await joinContestRemote(obj);
  //     setLoading(false);
  //     // handle failure
  //     if (!response.txn) {
  //       errorBox(response.msg, 500);
  //       return;
  //     }
  //     // refetch my contests(joined) API
  //     rfJC();
  //     // update user
  //     dispatch(updateUserInfo(userMeta.mobile));
  //     infoBox('Contest Succefully Joined', 500);
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //     infoBox('Contest Failed to Join !', 1000);
  //   }
  // }

  return (
    <CreateContestScreen
      userContests={userContests}
      allContests={allContests}
      err={p_ctst_e}
      selContest={selContest}
      refetch={rfp_ctst}
      loading={loading}
      onPressContestCard={onPressContestCard}
      onPressShareContest={onPressShareContest}
      onPressCopy={onPressCopy}
      wallet_amount={userMeta.un_utilized}
      proceedToJoin={proceedToJoin}
      isFetching={p_ctst_f}
      shareSheet={shareSheet}
      onPressSMSShare={onPressSMSShare}
      onPressMoreShare={onPressMoreShare}
      onEnterShareCode={onEnterShareCode}
      // joinModal={joinModal}
      userMeta={userMeta}
      // entryAmount={matchSelector?.joinContest?.entryAmount}
      // closeJoinModal={closeJoinModal}
      // joinContestWithTeam={joinContestWithTeam}
    />
  );
}
