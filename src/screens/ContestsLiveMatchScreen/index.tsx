import React, {useEffect, useRef, useState} from 'react';
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
  LoadingSpinner,
} from '../../sharedComponents/';
import Tabs from './atoms/Tabs';
import PagerView from 'react-native-pager-view';
import MyContestPage from './molecules/MyContestPage';
import CommentaryPage from '../LiveMatchScreen/molecules/CommentaryPage';
import ScrollBoardPage from '../LiveMatchScreen/molecules/ScrollBoardPage';
import ContestLiveMyTeamsPage from './molecules/ContestLiveMyTeamsPage';
import LinearGradient from 'react-native-linear-gradient';
import {Modalize} from 'react-native-modalize';
import BreakupModalSheet from './molecules/BreakupModalSheet';
import PlayersStats from '../LiveMatchScreen/molecules/PlayersStats';
import {useQuery} from 'react-query';
import {liveMatchMetaRemote} from '../../remote/matchesRemote';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function ContestLiveMatchScreen() {
  const navigation = useNavigation<any>();
  const pagerRef = useRef<any>();
  const breakUpSheet = useRef();
  const {width} = useWindowDimensions();

  const [selectedTab, setSelectedTab] = useState(0);

  const matchMeta = useQuery('matchMeta', liveMatchMetaRemote);

  useEffect(() => {
    if (matchMeta.data) {
      // console.log(matchMeta.data);
    }
  }, [matchMeta.data]);

  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };
  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  if (matchMeta.isLoading) {
    return <LoadingSpinner title={'RSA vs IND'} />;
  }
  if (matchMeta.isSuccess && !matchMeta.data) {
    return (
      <Text style={[tailwind('font-regular text-white font-15')]}>
        Failed to Load
      </Text>
    );
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={matchMeta.data.short_name} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#172338', '#0D1320']}
        style={[tailwind('p-3 bg-dark-3')]}>
        <MatchStat
          completed={false}
          team_a={matchMeta.data.team_a}
          team_b={matchMeta.data.team_b}
        />

        <Projection completed={false} />
        <View style={[tailwind('my-2 border-b border-gray-800')]}></View>
        <CurrentLiveStatus
          batter1={matchMeta.data.batters[0]}
          batter2={matchMeta.data.batters[1]}
          bowler={matchMeta.data.bowler}
          overInfo={[matchMeta.data.overInfo]}
        />
        {/* <ExpertsStats /> */}
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
        <View style={{width: width}}>
          <PlayersStats index={4} activeIndex={selectedTab} />
        </View>
      </PagerView>

      <Modalize
        ref={breakUpSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        // HeaderComponent={<FilterSheetTitle filterSheet={filterSheet} />}
      >
        <BreakupModalSheet />
      </Modalize>
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
