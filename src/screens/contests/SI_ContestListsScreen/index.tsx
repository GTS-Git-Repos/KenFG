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
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import SecondInContestListScreen from './second.in.contest.list.screen';
import ContestScreenLoading from './atoms/screen.loading.contest';
import {TO_TEAMLIST} from '../../../constants/appContants';

import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useContestList} from '../../../shared_hooks/contest.hooks';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
import {errorBox, infoBox} from '../../../utils/snakBars';

import PagerView from 'react-native-pager-view';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {View} from 'react-native';
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
  secondIncontestReducer,
  matchContestsState,
  sortStatusSelector,
  allContestsSelector,
} from './second.in.contest.list.controller';
import {TeamFormationMutationType} from '../../../types/match';
import {checksBeforeJoinContest} from '../../../workers/contest.decision';
import {updateUserInfo} from '../../../store/actions/userAction';
import {FlatList} from 'react-native-gesture-handler';

export default function ContestListHOC() {
  const dispatch = useDispatch();
  const [contestState, contestDispatch] = useReducer(
    secondIncontestReducer,
    matchContestsState,
  );
  const allContests = allContestsSelector(contestState);
  const sortStatus = sortStatusSelector(contestState);
  const colors = useSelector(appColorsSelector);

  const navigation = useNavigation<any>();
  const pagerRef = useRef<PagerView>(null);
  const route = useRoute<any>();

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const matchSelector: any = useSelector(selectedMatch);

  // set to false, because you already on second innings contests page
  const isFullMatch = false;

  // subscribe redux state
  const userSelector: any = useSelector(userInfo);
  const isScreenReady = useIsScreenReady();

  const [selectedTab, setSelectedTab] = useState(0);

  const {contests, contestsAPI, refetchContests}: any = useContestList(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  const {joined, joinedAPI, joinedAPILive, refetchJoinedContest}: any =
    useJoinedContests(
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
    if (contestsAPI) {
      if (contests) {
        contestDispatch({type: 'UPDATE_CONTESTS', payload: contests});
      } else {
        contestDispatch({type: 'UPDATE_CONTESTS', payload: null});
      }
    }
  }, [contestsAPI]);

  useEffect(() => {
    console.log('Contest List Params -->', route.params);
    if (route.params) {
      const autoJoinParams = route?.params?.params;
      console.log(autoJoinParams);
      if (autoJoinParams?.autoJoin) {
        setShowJoinModal(true);
      }
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      // console.log('Focused');
      refetchTeams();
      refetchJoinedContest();
    }, []),
  );

  function refetchPage() {
    refetchContests();
    refetchTeams();
    refetchJoinedContest();
  }

  function sortByOnPress(sortBy: any) {
    contestDispatch({type: 'UPDATE_SORT', payload: sortBy});
  }

  const teamPreviewPress = (team_key: any): any => {
    const team = teams.find((item: any) => item.team_key === team_key);
    if (team) {
      toTeamPreview(navigation, team);
      return;
    }
  };

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
              isFullMatch: false,
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
      setShowJoinModal(false);
      refetchJoinedContest();
      dispatch(updateUserInfo(userSelector.mobile));
      // infoBox('Contest Succefully Joined', 500);
    } catch (err) {
      setLoading(false);
      infoBox('Contest Failed to Join !', 1000);
    }
  }
  const openWallet = () => {
    setShowWalletModal(true);
  };

  function onPressCreateTeam() {
    toTeamFormationNoAutoJoin(navigation);
  }

  if (!isScreenReady || !contestsAPI) {
    return <ContestScreenLoading title={''} />;
  }

  return (
    <View style={[{flex: 1}]}>
      <FlatList
        refreshing={false}
        onRefresh={() => refetchPage()}
        contentContainerStyle={{flex: 1}}
        data={[1]}
        renderItem={() => {
          return (
            <SecondInContestListScreen
              userSelector={userSelector}
              contests={allContests}
              contestsAPI={contestsAPI}
              joined={joined}
              joinedAPI={joinedAPI}
              joinedAPILive={joinedAPILive}
              teams={teams}
              teamsAPI={teamsAPI}
              teamsAPILive={teamsAPILive}
              isFullMatch={isFullMatch}
              teamPreviewPress={teamPreviewPress}
              teamMutateAction={teamMutateAction}
              showWalletModal={showWalletModal}
              setShowWalletModal={setShowWalletModal}
              sortByOnPress={sortByOnPress}
              pagerRef={pagerRef}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              to={route?.params?.params?.to}
              showJoinModal={showJoinModal}
              setShowJoinModal={setShowJoinModal}
              entryAmount={matchSelector?.joinContest?.entryAmount}
              joinContestWithTeam={joinContestWithTeam}
              loading={loading}
              setLoading={setLoading}
              proceedToJoin={proceedToJoin}
              onPressTeamSwitch={onPressTeamSwitch}
              onPressJoinedContest={onPressJoinedContest}
              onPressSecondInnings={onPressSecondInnings}
              openWallet={openWallet}
              sortStatus={sortStatus}
              onPressCreateTeam={onPressCreateTeam}
            />
          );
        }}
      />
    </View>
  );
}
