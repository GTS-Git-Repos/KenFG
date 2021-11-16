import React, {useState, useRef} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TopbarContest, ContestCard} from '../../sharedComponents/';
import TabsContestInfo from './atoms/TabsContestInfo';
const log = console.log;
import LearderBoard from './molecules/LeaderBoardList';
import Animated, {useSharedValue} from 'react-native-reanimated';
import WinningsList from './molecules/WiningsList';

export default function ContestInfoScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {width} = useWindowDimensions();
  // const [tabOffset, setTabOffset] = useState(0);
  const tabOffset = useSharedValue(0);
  const scrollRef = useRef(null);

  const onScrollAction = e => {
    tabOffset.value = e.nativeEvent.contentOffset.x;
  };

  const onTabPress = (index: number) => {
    if (index === 0) {
      scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
    } else {
      scrollRef?.current?.scrollTo({x: width, y: 0, animated: true});
    }
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopbarContest title={'AUS vs SA'} subtitle={'18h 11m left'} />
      <View style={[tailwind('pt-2 bg-primary')]}>
        <ContestCard
          name={'Prize Pool'}
          title="10 Crores"
          left_spot={10}
          total_spot={100}
          first_reward={'1 Crore'}
          gaurantee={true}
          practice={false}
          demo_entry_amount={56}
          entry_amount={20}
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
        <WinningsList />
        <LearderBoard />
      </Animated.ScrollView>
    </View>
  );
}
