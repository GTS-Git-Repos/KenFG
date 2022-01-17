import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, useWindowDimensions, ScrollView, FlatList} from 'react-native';
import tailwind from '../../../../tailwind';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import {
  contestListsRemote,
  getJoinedTeamsRemote,
  joinContestRemote,
} from '../../../remote/matchesRemote';
import {useIsScreenReady, useRenderCount} from '../../../utils/customHoooks';
import TopBarContest from '../../../sharedComponents/atoms/TopbarContest';
import {BlockScreenByLoading} from '../../../sharedComponents';
import TabsContest from './molecules/TabsContest';
import ContestPage from './molecules/ContestPage';
import MyContestPage from './molecules/MyContestPage';
import MyTeamsPage from './molecules/MyTeamsPage';
import {useQuery} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectedMatch,
  userInfo,
  userWalletAmount,
} from '../../../store/selectors';
import CreateTeamButton from './atoms/CreateTeamButton';
import {
  joinContestRequestAction,
  updateSelectedContestAction,
} from '../../../store/actions/appActions';
import JoinContestModal from './molecules/JoinContestModal';
import Modal from 'react-native-modal';
import {errorBox} from '../../../utils/snakBars';
import {
  isMatchTimeExhausted,
  isWalletHaveContestAmount,
} from '../../../utils/comman';

const log = console.log;

interface PropTypes {
  contests: any;
  contestsAPI: any;
  joined: any;
  joinedAPI: any;
  teams: any;
  teamsAPI: any;
  teamsAPILive: any;
}

export default function ContestListScreen(props: PropTypes) {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  // const renderCount = useRenderCount('ContestListScreen')

  const {width} = useWindowDimensions();
  const pagerRef = useRef<any>(null);
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(0);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [loading, setLoading] = useState<any>(false);
  const [selectedFilter, setSelectedFilter] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState<any>('00h:00m:00s');

  const userInfoSelector: any = useSelector(userInfo);
  const userWallet: any = useSelector(userWalletAmount);
  const matchSelector: any = useSelector(selectedMatch);

  const selectedContestState: any = useSelector<any>(
    state => state.app.selected_contest,
  );

  // Business logic
  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  const navigate = (contest_key: string) => {
    dispatch(updateSelectedContestAction(contest_key));
    navigation.navigate('ContestInfoScreen', {
      contest_key: contest_key,
    });
  };

  const proceedToJoin = (contest_key: string) => {
    try {
      const contest = props.contests.find(
        (item: any) => item.key === contest_key,
      );
      if (!contest) {
        throw 'no contest found';
      }
      // is time exhausted ?
      const timeExhausted = isMatchTimeExhausted(matchSelector.start_at);
      if (timeExhausted) {
        errorBox('Time Exhausted');
        return;
      }
      // sent a contest join request
      dispatch(
        joinContestRequestAction({
          contestKey: contest.key,
          entryAmount: contest.entry,
          maxTeam: contest.max_entry,
        }),
      );
      const walletStatus: any = isWalletHaveContestAmount(
        contest.entry,
        userWallet,
      );
      if (!walletStatus.status) {
        // go to wallet screen with needed amount in route params
      }
      if (props.teams?.length > 0) {
        navigation.navigate('TeamSelectionScreen');
      } else {
        navigation.navigate('TeamFormationScreen');
      }
    } catch (err) {
      console.log('proceedToJoin', err);
    }
  };

  const joinContest = async () => {
    try {
      let payload = {
        match_key: matchSelector.match_key,
        contest_key: selectedContestState,
        team_key: route.params.team_key,
        player_key: userInfoSelector.mobile,
      };
      setLoading(true);
      const response = await joinContestRemote(payload);
      if (response) {
        setShowJoinModal(false);
        pagerRef.current?.setPage(1);
      } else {
        errorBox('Failed to join Contest');
      }
    } catch (err) {
      log('joinContest', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest
        title={matchSelector?.titleString}
        subtitle={currentTime}
      />
      <View style={[tailwind('')]}>
        <TabsContest
          selectedTab={selectedTab}
          teamsCount={props.teams?.length}
          onTabPressed={onTabPressed}
        />
      </View>
      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}
        initialPage={selectedTab}>
        <View style={{width: width}}>
          <ContestPage
            navigate={navigate}
            status={props.contestsAPI}
            data={props.contests}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            proceedToJoin={proceedToJoin}
          />
        </View>
        <View style={{width: width}}>
          <MyContestPage joined={props.joined} status={props.joinedAPI} />
        </View>
        <View style={{width: width}}>
          <MyTeamsPage
            teams={props.teams}
            status={props.teamsAPI}
            live={props.teamsAPILive}
          />
        </View>
      </PagerView>

      {props.contests && <CreateTeamButton />}

      <Modal
        isVisible={showJoinModal}
        animationInTiming={150}
        animationOutTiming={150}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        scrollHorizontal={true}>
        <JoinContestModal
          setShowJoinModal={setShowJoinModal}
          joinContest={joinContest}
        />
      </Modal>
      {loading && <BlockScreenByLoading />}
    </View>
  );
}

/**
 * match_key is a mandatory params
 */
