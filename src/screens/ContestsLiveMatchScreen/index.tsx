import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {
  TopBar,
  FullScreenLoading,
  MatchStat,
  Projection,
  CurrentLiveStatus,
  ExpertsStats,
} from '../../sharedComponents/';
import Tabs from './atoms/Tabs';
import PagerView from 'react-native-pager-view';
import MyContestPage from './molecules/MyContestPage';
import CommentaryPage from '../LiveMatchScreen/molecules/CommentaryPage';
import ScrollBoardPage from '../LiveMatchScreen/molecules/ScrollBoardPage';
import ContestLiveMyTeamsPage from './molecules/ContestLiveMyTeamsPage';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function ContestLiveMatchScreen() {
  const navigation = useNavigation<any>();
  const pagerRef = useRef<any>();
  const {width} = useWindowDimensions();

  const [selectedTab, setSelectedTab] = useState(0);

  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };
  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'AUS vs ENG'} />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#172338', '#0D1320']}
        style={[tailwind('px-3 pt-6 pb-3 bg-dark-3')]}>
        <MatchStat teamName1={'Australia'} teamName2={'England'} />

        <Projection />
        <View style={[tailwind('my-2'), styles.line]}></View>
        <CurrentLiveStatus />
        <ExpertsStats />
      </LinearGradient>

      <View>
        <Tabs activeIndex={selectedTab} onTabPressed={onTabPressed} />
      </View>

      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}
        initialPage={selectedTab}>
        <View style={{width: width}}>
          <MyContestPage index={0} activeIndex={selectedTab} />
        </View>
        <View style={{width: width}}>
          <ContestLiveMyTeamsPage index={1} activeIndex={selectedTab} />
        </View>
        <View style={{width: width}}>
          <CommentaryPage index={2} activeIndex={selectedTab} />
        </View>
        <View style={{width: width}}>
          <ScrollBoardPage index={3} activeIndex={selectedTab} />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8797B1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
