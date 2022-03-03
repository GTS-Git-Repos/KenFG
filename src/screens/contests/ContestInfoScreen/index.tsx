import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  isFullMatchSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {
  useContestLeaderboard,
  useContestList,
  useGetTeams,
  useJoinedContests,
} from '../../../shared_hooks/contest.hooks';
import ContestInfoScreen from './contest.info.screen';
import {checksBeforeJoinContest} from '../../../workers/contest.decision';
import {toTeamFormationWithAutoJoin} from '../../../store/actions/navigationActions';
import {useNavigation, useRoute} from '@react-navigation/core';
import {TO_TEAMLIST} from '../../../constants/appContants';

export default function ContestInfoHOC() {
  const navigation = useNavigation();
  const route: any = useRoute();

  const [contestInfo, setContestInfo] = useState<any>(null);
  const [current, setCurrent] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isFullMatch: boolean = useSelector(isFullMatchSelector);

  const {contests}: any = useContestList(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  const {ldbMeta, ldbLive, ldbErr, refetchLeaderBoard}: any =
    useContestLeaderboard(
      matchSelector.match_key,
      route.params.contest_key,
      userSelector.mobile,
    );

  const {joined, joinedAPI}: any = useJoinedContests(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  const {teams, teamsAPI}: any = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  useEffect(() => {
    if (contests) {
      const contestInfo = contests.find(
        (item: any) => item.key === route.params.contest_key,
      );
      if (contestInfo) {
        setContestInfo(contestInfo);
      }
    }
  }, [contests]);

  function openWallet(input: boolean) {
    if (input) {
      setShowWalletModal(true);
    } else {
      setShowWalletModal(false);
    }
  }

  function refetch() {
    refetchLeaderBoard();
  }

  function changePriceDistribution() {
    setCurrent(!current);
  }

  async function proceedToJoin(contest_key: string) {
    try {
      if (contestInfo) {
        const checkContestJoin = checksBeforeJoinContest(
          matchSelector.start_at,
          contestInfo,
          joined,
          teams,
        );

        if (checkContestJoin.status) {
          toTeamFormationWithAutoJoin(
            navigation,
            checkContestJoin.to === TO_TEAMLIST,
            {
              contestKey: contestInfo.key,
              entryAmount: contestInfo.entry,
              maxTeam: contestInfo.max_entry,
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

  return (
    <ContestInfoScreen
      contestInfo={contestInfo}
      priceDist={current}
      changePriceDistribution={changePriceDistribution}
      userSelector={userSelector}
      openWallet={openWallet}
      showWalletModal={showWalletModal}
      setShowWalletModal={setShowWalletModal}
      // setOpenWallet={setOpenWallet}
      proceedToJoin={proceedToJoin}
      ldbLive={ldbLive}
      ldbMeta={ldbMeta}
      ldbErr={ldbErr}
    />
  );
}
