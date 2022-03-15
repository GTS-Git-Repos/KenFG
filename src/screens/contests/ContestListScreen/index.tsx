import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  appColorsSelector,
  isFullMatchSelector,
  joinModalSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import ContestListScreen from './contest.list.screen';
// import ContestScreenLoading from './atoms/screen.loading.contest';
import {TO_TEAMLIST} from '../../../constants/appContants';
import {FlatList} from 'react-native';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useContestList} from '../../../shared_hooks/contest.hooks';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {InternetError, ContestScreenLoading} from '../../../sharedComponents/';
import PagerView from 'react-native-pager-view';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {
  toSecondInningsContestList,
  toSwitchTeam,
  toTeamFormationNoAutoJoin,
  toTeamFormationWithAutoJoin,
  toTeamFormationWithMutation,
  toTeamPreview,
} from '../../../store/actions/navigationActions';
import {
  useGetTeams,
  useJoinedContests,
} from '../../../shared_hooks/contest.hooks';
import {
  contestFilterSelector,
  contestLoadingSelector,
  contestReducer,
  matchContestsState,
  sortStatusSelector,
  updateContests,
  updateFilter,
  updateLoading,
  updateSort,
} from './contest.list.controller';
import {allContestsSelector} from './contest.list.controller';
import {TeamFormationMutationType} from '../../../types/match';
import {checksBeforeJoinContest} from '../../../workers/contest.decision';
import {updateUserInfo} from '../../../store/actions/userAction';
import {} from 'react-native-gesture-handler';
import {
  toContestInfo,
  toCreateContest,
} from '../../../navigations/contest.links';
import {SortStatusType} from 'src/types/contest';
import {updateJoinModalAction} from '../../../store/actions/appActions';

export default function ContestListHOC() {
  const dispatch = useDispatch();
  const [contestState, contestDispatch] = useReducer(
    contestReducer,
    matchContestsState,
  );
  const CLoading = contestLoadingSelector(contestState);
  const allContests = allContestsSelector(contestState);
  const sortStatus = sortStatusSelector(contestState);
  const contestFilters = contestFilterSelector(contestState);

  const navigation = useNavigation<any>();
  const pagerRef = useRef<PagerView>(null);
  const route = useRoute<any>();

  // const [showJoinModal, setShowJoinModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const matchSelector: any = useSelector(selectedMatch);
  const isFullMatch: boolean = useSelector(isFullMatchSelector);
  const userSelector: any = useSelector(userInfo);
  const joinModal: boolean = useSelector(joinModalSelector);
  const isScreenReady = useIsScreenReady();

  const [selectedTab, setSelectedTab] = useState(0);

  // api calls data

  const {contests, rfContests, ctstError}: any = useContestList(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  const {joined, joinedAPI, joinedAPILive, rfJC}: any = useJoinedContests(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  const {teams, teamsAPI, teamsAPILive, refetchTeams}: any = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  useEffect(() => {
    if (contests) {
      contestDispatch(updateContests(contests));
      contestDispatch(updateLoading(false));
    }
  }, [contests]);

  // refetch on focus
  useFocusEffect(
    useCallback(() => {
      refetchPage();
      // check is open join modal state is true
      // console.log('joinModal', joinModal);
    }, []),
  );

  // refetch the api
  function refetchPage() {
    rfContests();
    refetchTeams();
    rfJC();
  }

  function sortByOnPress(payload: SortStatusType) {
    contestDispatch(updateSort(payload));
  }

  function filterOnPress(id: string) {
    contestDispatch(updateFilter(id));
  }

  function onContestCardPress(contest_key: string) {
    toContestInfo(navigation, contest_key);
  }

  const teamPreviewPress = (team_key: any): any => {
    const team = teams.find((item: any) => item.team_key === team_key);
    if (team) {
      toTeamPreview(navigation, team);
      return;
    }
  };

  function onPressCreateContest() {
    toCreateContest(navigation);
  }

  function onPressSecondInnings() {
    toSecondInningsContestList(navigation, matchSelector);
  }

  const teamMutateAction = (
    team_key: any,
    mutationObj: TeamFormationMutationType,
  ) => {
    const team = teams.find((item: any) => item.team_key === team_key);
    if (team) {
      toTeamFormationWithMutation(navigation, team_key, team, mutationObj);
    }
    return;
  };

  const openWallet = () => {
    setShowWalletModal(true);
  };

  function closeJoinModal() {
    dispatch(updateJoinModalAction(false));
  }

  function onPressCreateTeam() {
    toTeamFormationNoAutoJoin(navigation);
  }

  const onPressJoinedContest = (contest_key: string): void => {
    console.log('DEPRECATED MOVE TO CONTEST NAVIGATION');
    const contest = joined.find(
      (item: any) => item.contestMeta.contest_code === contest_key,
    );
    if (contest) {
      // console.log(joined[0].contestMeta.contest_code);
      navigation.navigate('ContestInfoScreen', {
        contest_key: joined[0].contestMeta.contest_code,
      });
    }
  };

  const onPressTeamSwitch = (team_key: string, contest_key: string): void => {
    const jContest = joined.find(
      (item: any) => item.contestMeta.contest_code === contest_key,
    );

    if (!jContest) {
      errorBox("Can't able to switch team", 100);
      return;
    }
    toSwitchTeam(navigation, {
      match_key: matchSelector.match_key,
      contest_key: contest_key,
      old_team_key: team_key,
      player_key: userSelector.mobile,
      existedTeams: jContest.contestMeta.contest_team,
    });
  };

  async function proceedToJoin(contest_key: string) {
    try {
      const contest = contests.find((item: any) => item.key === contest_key);
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

  async function joinContestWithTeam() {
    try {
      // close the join modal popup
      closeJoinModal();
      const obj = {
        match_key: matchSelector.match_key,
        contest_key: matchSelector.joinContest.contestKey,
        team_key: route.params.params.team_key,
        player_key: userSelector.mobile,
      };
      setLoading(true);
      const response = await joinContestRemote(obj);
      setLoading(false);
      // handle failure
      if (!response.txn) {
        errorBox(response.msg, 500);
        return;
      }
      // refetch my contests(joined) API
      rfJC();
      // update user
      dispatch(updateUserInfo(userSelector.mobile));
      // infoBox('Contest Succefully Joined', 500);
    } catch (err) {
      setLoading(false);
      infoBox('Contest Failed to Join !', 1000);
    }
  }

  // if contests api network error happended
  if (ctstError) {
    return <InternetError referch={refetchPage} />;
  }

  // if screen is ready or contests API on loading state show loader
  if (!isScreenReady || CLoading) {
    return <ContestScreenLoading />;
  }

  return (
    <ContestListScreen
      userSelector={userSelector}
      contests={allContests}
      contestFilters={contestFilters}
      filterOnPress={filterOnPress}
      ctsLoading={CLoading}
      onContestCardPress={onContestCardPress}
      joined={joined}
      joinedAPI={joinedAPI}
      joinedAPILive={joinedAPILive}
      teams={teams}
      teamsAPI={teamsAPI}
      teamsAPILive={teamsAPILive}
      isFullMatch={isFullMatch}
      joinModal={joinModal}
      closeJoinModal={closeJoinModal}
      teamPreviewPress={teamPreviewPress}
      teamMutateAction={teamMutateAction}
      showWalletModal={showWalletModal}
      setShowWalletModal={setShowWalletModal}
      sortByOnPress={sortByOnPress}
      pagerRef={pagerRef}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      entryAmount={matchSelector?.joinContest?.entryAmount}
      joinContestWithTeam={joinContestWithTeam}
      loading={loading}
      setLoading={setLoading}
      proceedToJoin={proceedToJoin}
      onPressCreateContest={onPressCreateContest}
      onPressTeamSwitch={onPressTeamSwitch}
      onPressJoinedContest={onPressJoinedContest}
      onPressSecondInnings={onPressSecondInnings}
      openWallet={openWallet}
      sortStatus={sortStatus}
      onPressCreateTeam={onPressCreateTeam}
    />
  );
}
