import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  MatchStat,
  Projection,
  CurrentLiveStatus,
  ExpertsStats,
  LoadingSpinner,
} from '../../../sharedComponents';

import PagerView from 'react-native-pager-view';

import LiveMatchSeparator from './atoms/LiveMatchSeparator';
import {useIsScreenReady} from '../../../utils/customHoooks';
import LiveMatchTabs from './atoms/LiveMatchTabs';

import ScrollBoardPage from './molecules/ScrollBoardPage';
import LeaderBoardPage from './molecules/LeaderBoardPage';
import CommentaryPage from './molecules/CommentaryPage';
import PlayersStats from './molecules/PlayersStats';
import WinningsPage from './molecules/WinningsPage';
import LinearGradient from 'react-native-linear-gradient';
import LiveMatchLoading from './atoms/LiveMatchLoading';
import LiveMatchTopBar from './atoms/LiveMatchTopBar';
import {liveMatchMetaRemote} from '../../../remote/matchesRemote';
import {useQuery} from 'react-query';

// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

export default function LiveMatchScreen() {
  const navigation = useNavigation();
  const pageRef = useRef(null);
  const isScreenReady = useIsScreenReady();
  const [activeIndex, setActiveIndex] = useState(0);

  const {data, isLoading, isSuccess} = useQuery(
    'matchMeta',
    liveMatchMetaRemote,
    {
      staleTime: 8000,
    },
  );

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  if (isScreenReady === false) {
    return <LiveMatchLoading title={'South Africa vs India'} />;
  }
  if (isLoading) {
    return <LoadingSpinner title={'South Africa vs India'} />;
  }
  if (isSuccess && !data) {
    return (
      <Text style={[tailwind('font-regular text-white font-15')]}>
        Failed to Load
      </Text>
    );
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <LiveMatchTopBar text={'South Africa vs India'} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#172338', '#0D1320']}
        style={[tailwind('p-3 bg-dark-3')]}>
        <MatchStat
          completed={false}
          team_a={data.team_a}
          team_b={data.team_b}
          score_a={data.score_a}
          score_b={data.score_b}
        />

        <Projection completed={false} msg={data.notification} />

        <View style={[tailwind('my-2')]}>
          <LiveMatchSeparator />
        </View>
        <CurrentLiveStatus
          striker={data.striker}
          nonStriker={data.nonStriker}
          bowler={data.bowler}
          lastOverData={data.lastOverData}
        />
        {/* <ExpertsStats /> */}
      </LinearGradient>

      <View>
        <LiveMatchTabs activeIndex={activeIndex} onTabPressed={onTabPressed} />
      </View>

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}>
        <View>
          <LeaderBoardPage index={0} activeIndex={activeIndex} />
        </View>
        <View>
          <WinningsPage index={1} activeIndex={activeIndex} />
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
