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
import {
  TopbarContest,
  ContestCard,
  FullScreenLoading,
} from '../../sharedComponents/';
import TabsContestInfo from './atoms/TabsContestInfo';
import {useQuery} from 'react-query';
const log = console.log;
import LearderBoard from './molecules/LeaderBoardList';
import {useIsScreenReady} from '../../utils/customHoooks';
import {contestListsTypes} from '../../types/api';

import {contestInfoRemote} from '../../remote/matchesRemote';

import Animated, {useSharedValue} from 'react-native-reanimated';
import WinningsList from './molecules/WiningsList';
import CreateTeamButton from './atoms/CreateTeamButton';
import {useSelector} from 'react-redux';

export default function ContestInfoScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {width} = useWindowDimensions();
  const tabOffset = useSharedValue<any>(0);
  const scrollRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();

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
    // navigation.navigate('CreateTeamScreen');
    log('selectedContestState', selectedContestState);
  };

  const onScrollAction = (e: any) => {
    tabOffset.value = e.nativeEvent.contentOffset.x;
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
      <FullScreenLoading
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
          navigate={navigate}
          contest_key={contest.data.key}
          match_key={contest.data.match_key}
          title={contest.data.title}
          total_joined={200}
          total_spots={1000}
          amount_letters={contest.data.prize.amount_letters}
          amount={contest.data.prize.amount}
          guaranteed={contest.data.guaranteed}
          entry={contest.data.entry}
          max_entry={contest.data.max_entry}
          bonus={contest.data.bonus}
          is_practice={contest.data.is_practice}
        />
      </View>
      <TabsContestInfo
        tabOffset={tabOffset}
        tabs={['Winnings', 'LeaderBoard']}
        onTabPress={onTabPress}
      />
      <Animated.ScrollView
        ref={scrollRef}
        onScroll={onScrollAction}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        scrollEnabled={true}
        decelerationRate={'normal'}
        disableIntervalMomentum={true}
        snapToAlignment="center"
        snapToInterval={width}
        scrollEventThrottle={16}>
        <WinningsList data={contest.data.prize.winnings} />
        <LearderBoard />
      </Animated.ScrollView>
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
