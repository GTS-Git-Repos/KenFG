import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, useWindowDimensions, ScrollView, FlatList} from 'react-native';
import tailwind from '../../../tailwind';
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
} from '../../remote/matchesRemote';
import {useIsScreenReady} from '../../utils/customHoooks';
import TopBarContest from '../../sharedComponents/atoms/TopbarContest';
import {FullScreenLoading, BlockScreenByLoading} from '../../sharedComponents';
import ContestScreenLoading from './atoms/ContestScreenLoading';
import Tabs from './molecules/TabsContest';
import ContestPage from './molecules/ContestPage';
import MyContestPage from './molecules/MyContestPage';
import MyTeamsPage from './molecules/MyTeamsPage';
import {useQuery} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../store/selectors';
import CreateTeamButton from './atoms/CreateTeamButton';
import {updateSelectedContestAction} from '../../store/actions/appActions';
import JoinContestModal from './molecules/JoinContestModal';
import Modal from 'react-native-modal';
import {errorBox} from '../../utils/snakBars';

const log = console.log;

export default function ContestListScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const {width} = useWindowDimensions();
  const pagerRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(0);
  const [showJoinModal, setShowJoinModal] = useState(true);
  const [loading, setLoading] = useState<any>(false);
  const [selectedFilter, setSelectedFilter] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState<any>('00h:00m:00s');

  const userInfoSelector: any = useSelector(userInfo);
  const matchSelector: any = useSelector(selectedMatch);

  const selectedMatchState: any = useSelector<any>(
    state => state.app.selected_match,
  );

  const selectedContestState: any = useSelector<any>(
    state => state.app.selected_contest,
  );

  const contests = useQuery(
    ['contests', selectedMatchState?.match_key],
    contestListsRemote,
  );

  const teams = useQuery(
    ['teams', userInfoSelector?.mobile, selectedMatchState?.match_key],
    getJoinedTeamsRemote,
  );

  // side Effects

  useEffect(() => {
    if (route.params?.contest_key && selectedContestState) {
      setShowJoinModal(true);
    } else {
      setShowJoinModal(false);
    }
  }, []);

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

  const joinContest = async () => {
    try {
      let payload = {
        match_key: selectedMatchState.match_key,
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

  if (isScreenReady === false || !contests.data) {
    return <ContestScreenLoading title={matchSelector?.titleString} />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest
        title={matchSelector?.titleString}
        subtitle={currentTime}
      />
      <View style={[tailwind('')]}>
        <Tabs
          selectedTab={selectedTab}
          teamsCount={teams?.data}
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
            status={contests.status}
            data={contests.data}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </View>
        <View style={{width: width}}>
          <MyContestPage />
        </View>
        <View style={{width: width}}>
          <MyTeamsPage teams={teams.data} status={teams.status} />
        </View>
      </PagerView>

      <View
        style={[
          tailwind(
            'absolute bottom-0 w-full flex-row items-center justify-center',
          ),
        ]}>
        <CreateTeamButton contests={contests} />
      </View>

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
