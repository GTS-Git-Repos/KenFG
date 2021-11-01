import React, {useState, useRef} from 'react';
import {View, Text, Image, useWindowDimensions, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import {useQuery} from 'react-query';
import {TopbarContest, ContestCard} from '../../sharedComponents/';
import TabsContestInfo from './atoms/TabsContestInfo';
const log = console.log;
import LearderBoard from './molecules/LeaderBoardList';
import WinningsList from './molecules/WiningsList';

export default function ContestInfoScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {width} = useWindowDimensions();
  // const [tabOffset, setTabOffset] = useState(0);
  const tabOffset = useRef(0);

  function onScrollEnded(e) {
    tabOffset.current = e.nativeEvent.contentOffset.x;
  }

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
        tabOffset={tabOffset.current}
        tabs={['Winnings', 'LeaderBoard']}
      />
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={true}
        decelerationRate={'normal'}
        disableIntervalMomentum={true}
        snapToAlignment="center"
        snapToInterval={width}
        scrollEventThrottle={16}
        onMomentumScrollEnd={onScrollEnded}>
        <WinningsList />
        <LearderBoard />
      </ScrollView>
    </View>
  );
}
