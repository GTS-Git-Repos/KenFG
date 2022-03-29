import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  MatchStat,
  Projection,
  CurrentLiveStatus,
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
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

export default function ContestMatchScreen(props: ContestMatchScreenType) {
  const dT = useSelector(getAppThemeSelector);

  const pageRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  return (
    <View style={[tailwind('h-full'), dT ? clr.bgd1 : clr.bgGray]}>
      <LiveMatchTopBar dT={dT} text={props.matchMeta?.match?.short_name} />
      <View style={[tailwind('p-3'), dT ? clr.bgd2 : clr.bgGray]}>
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
        <LiveMatchTabs
          dT={dT}
          activeIndex={activeIndex}
          onTabPressed={onTabPressed}
        />
      </View>

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        initialPage={0}
        style={{flex: 1}}>
        <View>
          <LeaderBoardPage
            dT={dT}
            onPressCompareTeam={props.onPressCompareTeam}
            index={0}
            activeIndex={activeIndex}
          />
        </View>
        <View>
          <WinningsPage dT={dT} index={1} activeIndex={activeIndex} />
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
