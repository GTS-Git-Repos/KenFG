import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  MatchStat,
  Projection,
  CurrentLiveStatus,
  ExpertsStats,
  MatchPlayersStats,
  LoadingSpinner,
} from '../../../sharedComponents';

import PagerView from 'react-native-pager-view';
import {MatchCommentary, MatchScoreBoard} from '../../../sharedComponents';
import LiveMatchSeparator from './atoms/LiveMatchSeparator';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import LiveMatchTabs from './atoms/LiveMatchTabs';

import LeaderBoardPage from './molecules/LeaderBoardPage';
import WinningsPage from './molecules/WinningsPage';
import LinearGradient from 'react-native-linear-gradient';
import LiveMatchTopBar from './atoms/LiveMatchTopBar';

// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

interface PropTypes {
  matchAPI: any;
  matchMeta: any;
  onPressCompareTeam(src_team_key: string, opp_team_key: string): void;
}

export default function ContestMatchScreen(props: PropTypes) {
  const pageRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();
  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  if (isScreenReady === false || !props.matchAPI) {
    return <LoadingSpinner title={'Loading'} />;
  }
  if (props.matchAPI && !props.matchMeta) {
    return <Text>Received Scrambled data :(</Text>;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <LiveMatchTopBar text={props.matchMeta?.match?.short_name} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#172338', '#0D1320']}
        style={[tailwind('p-3 bg-dark-3')]}>
        <MatchStat
          team_a={props.matchMeta.team_a}
          team_b={props.matchMeta.team_b}
          score_a={props.matchMeta.score_a}
          score_b={props.matchMeta.score_b}
          matchStatus={props.matchMeta.matchStatus}
        />

        <Projection completed={false} msg={props.matchMeta.notification} />

        <View style={[tailwind('my-2')]}>
          <LiveMatchSeparator />
        </View>
        <CurrentLiveStatus
          striker={props.matchMeta.striker}
          nonStriker={props.matchMeta.nonStriker}
          bowler={props.matchMeta.bowler}
          lastOverData={props.matchMeta.lastOverData}
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
          <LeaderBoardPage
            onPressCompareTeam={props.onPressCompareTeam}
            index={0}
            activeIndex={activeIndex}
          />
        </View>
        <View>
          <WinningsPage index={1} activeIndex={activeIndex} />
        </View>
        <View>
          <MatchScoreBoard
            index={2}
            activeIndex={activeIndex}
            innings={props.matchMeta.innings}
          />
        </View>
        <View>
          <MatchCommentary index={3} activeIndex={activeIndex} />
        </View>
        <View>
          <MatchPlayersStats index={4} activeIndex={activeIndex} />
        </View>
      </PagerView>
    </View>
  );
}
