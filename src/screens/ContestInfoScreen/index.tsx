import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TopbarContest, ContestCard} from '../../sharedComponents/';
import TabsContestInfo from './atoms/TabsContestInfo';
import {useQuery} from 'react-query';
const log = console.log;
import LearderBoard from './molecules/LeaderBoardList';
import {useIsScreenReady} from '../../utils/customHoooks';

import {contestInfoRemote} from '../../remote/matchesRemote';

import {useSharedValue} from 'react-native-reanimated';
import WinningsList from './molecules/WiningsList';
import CreateTeamButton from './atoms/CreateTeamButton';
import {useSelector} from 'react-redux';
import ContestInfoPageLoading from './atoms/ContestInfoPageLoading';
import PagerView from 'react-native-pager-view';

export default function ContestInfoScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {width} = useWindowDimensions();
  const tabOffset = useSharedValue<any>(0);
  const scrollRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();
  const pageRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const selectedMatchState: any = useSelector<any>(
    state => state.app.selected_match,
  );

  const selectedContestState: any = useSelector<any>(
    state => state.app.selected_contest,
  );

  const contest = useQuery(
    ['contest', selectedMatchState?.match_key, route.params.contest_key],
    contestInfoRemote,
  );

  // Bussiness logic

  const navigate = () => {
    log('selectedContestState', selectedContestState);
    navigation.navigate('CreateTeamScreen');
  };

  const proceedToJoin = (contest_key: string) => {
    navigation.navigate('CreateTeamScreen');
  };

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  const onTabPress = (index: number) => {
    if (index === 0) {
      scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
    } else {
      scrollRef?.current?.scrollTo({x: width, y: 0, animated: true});
    }
  };

  if (isScreenReady === false || !contest.data) {
    return (
      <ContestInfoPageLoading
        title={`${selectedMatchState.team_a?.toUpperCase()} VS ${selectedMatchState.team_b?.toUpperCase()}`}
      />
    );
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopbarContest
        title={`${selectedMatchState.team_a?.toUpperCase()} VS ${selectedMatchState.team_b?.toUpperCase()}`}
        subtitle={'18h 11m left'}
      />
      <View style={[tailwind('pt-2 bg-primary')]}>
        <ContestCard
          navigate={() => {}}
          contest_key={contest.data.key}
          match_key={contest.data.match_key}
          title={contest.data.title}
          total_joined={30}
          total_spots={contest.data.total_spots}
          amount_letters={contest.data.prize.amount_letters}
          amount={contest.data.prize.amount}
          guaranteed={contest.data.guaranteed}
          entry={contest.data.entry}
          max_entry={contest.data.max_entry}
          bonus={contest.data.bonus}
          is_practice={contest.data.is_practice}
          contest_type={contest.data.contest_type}
          proceedToJoin={proceedToJoin}
        />
      </View>
      <TabsContestInfo
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
        tabOffset={tabOffset}
        tabs={['Winnings', 'LeaderBoard']}
        onTabPress={onTabPress}
      />

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}>
        <View>
          <WinningsList
            index={0}
            activeIndex={activeIndex}
            data={contest.data.prize.winnings}
          />
        </View>
        <View>
          <LearderBoard index={1} activeIndex={activeIndex} />
        </View>
      </PagerView>
      <View
        style={[
          tailwind(
            'absolute bottom-0 w-full flex-row items-center justify-center',
          ),
        ]}>
        <CreateTeamButton />
      </View>
    </View>
  );
}

/**
 * match_key:
 * contest_key:  [Route params is mandatory]
 */
