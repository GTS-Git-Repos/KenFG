import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  MatchStat,
  Projection,
  CurrentLiveStatus,
  FullScreenLoading,
  MatchPlayersStats,
} from '../../../sharedComponents';

import PagerView from 'react-native-pager-view';
import {MatchCommentary, MatchScoreBoard} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import LiveMatchTabs from './atoms/LiveMatchTabs';

import LeaderBoardPage from './molecules/mc.leaderboard';
import WinningsPage from './molecules/WinningsPage';
import LiveMatchTopBar from './atoms/LiveMatchTopBar';
import {ContestMatchScreenType} from '../../../types/match';

export default function ContestMatchScreen(props: ContestMatchScreenType) {
  const pageRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();
  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <LiveMatchTopBar text={props.matchMeta?.match?.short_name} />
      <View style={[tailwind('p-3 bg-dark-3')]}>
        <MatchStat
          team_a={props.matchMeta.team_a}
          team_b={props.matchMeta.team_b}
          score_a={props.matchMeta.score_a}
          score_b={props.matchMeta.score_b}
          matchStatus={props.matchMeta.matchStatus}
        />

        <Projection msg={props.matchMeta.notification} />

        <CurrentLiveStatus
          striker={props.matchMeta.striker}
          nonStriker={props.matchMeta.nonStriker}
          bowler={props.matchMeta.bowler}
          lastOverData={props.matchMeta.lastOverData}
        />
        {/* <ExpertsStats /> */}
      </View>

      <View>
        <LiveMatchTabs activeIndex={activeIndex} onTabPressed={onTabPressed} />
      </View>

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        initialPage={0}
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
          <MatchPlayersStats
            index={4}
            activeIndex={activeIndex}
            players={props.players}
          />
        </View>
      </PagerView>
    </View>
  );
}
