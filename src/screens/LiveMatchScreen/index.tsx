import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  TopBar,
  FullScreenLoading,
  MatchStat,
  Projection,
  CurrentLiveStatus,
  ExpertsStats,
} from '../../sharedComponents/';

import PagerView from 'react-native-pager-view';

import LiveMatchSeparator from './atoms/LiveMatchSeparator';
import {useIsScreenReady} from '../../utils/customHoooks';
import LiveMatchTabs from './atoms/LiveMatchTabs';

import ScrollBoardPage from './molecules/ScrollBoardPage';
import LeaderBoardPage from './molecules/LeaderBoardPage';
import CommentaryPage from './molecules/CommentaryPage';
import PlayersStats from './molecules/PlayersStats';
import WinningsPage from './molecules/WinningsPage';

// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

export default function LiveMatchScreen() {
  const navigation = useNavigation();
  const pageRef = useRef(null);
  const isScreenReady = useIsScreenReady();
  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  if (isScreenReady === false) {
    return <FullScreenLoading title={'AUS vs ENG'} />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'AUS vs ENG'} />

      <View style={[tailwind('px-3 pt-6 pb-3 bg-dark-3')]}>
        <MatchStat teamName1={'Australia'} teamName2={'England'} />

        <Projection />
        <View style={[tailwind('my-2')]}>
          <LiveMatchSeparator />
        </View>
        <CurrentLiveStatus />
        <ExpertsStats />
      </View>

      <View>
        <LiveMatchTabs activeIndex={activeIndex} onTabPressed={onTabPressed} />
      </View>

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}>
        <View>
          <WinningsPage index={0} activeIndex={activeIndex} />
        </View>
        <View>
          <LeaderBoardPage index={1} activeIndex={activeIndex} />
        </View>
        <View>
          <ScrollBoardPage index={2} activeIndex={activeIndex} />
        </View>
        <View>
          <CommentaryPage index={3} activeIndex={activeIndex} />
        </View>
        <View>
          <PlayersStats index={4} activeIndex={activeIndex} />
        </View>
      </PagerView>
    </View>
  );
}
