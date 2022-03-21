import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import tailwind from '../../../../tailwind';
import {
  TopBar,
  MatchStat,
  Projection,
  CurrentLiveStatus,
  MatchPlayersStats,
} from '../../../sharedComponents';
import Tabs from './atoms/Tabs';
import PagerView from 'react-native-pager-view';
import ContestListMatchPage from './molecules/contest.list.match';
import {MatchCommentary, MatchScoreBoard} from '../../../sharedComponents';
import MatchMyTeamsPage from './molecules/match.myteams.page';
import {Modalize} from 'react-native-modalize';
import clr from '../../../constants/colors';
import BreakupModalSheet from './molecules/BreakupModalSheet';
import {MatchScreenType} from '../../../types/match';

export default function MatchScreen(props: MatchScreenType) {
  const {matchMeta} = props;
  const teamTag = matchMeta.match.short_name;

  const pagerRef = useRef<any>();
  const breakUpSheet = useRef(null);
  const {width} = useWindowDimensions();

  // Local state
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  return (
    <View style={ss.root}>
      <TopBar text={teamTag} helpIcon={true} ptsIcon={true} />
      <View style={[ss.container]}>
        <MatchStat
          matchStatus={matchMeta.matchStatus}
          team_a={matchMeta.team_a}
          team_b={matchMeta.team_b}
          score_a={matchMeta.score_a}
          score_b={matchMeta.score_b}
        />
        <Projection msg={matchMeta.notification} />

        <CurrentLiveStatus
          striker={matchMeta.striker}
          nonStriker={matchMeta.nonStriker}
          bowler={matchMeta.bowler}
          lastOverData={matchMeta.lastOverData}
        />
      </View>

      <View>
        <Tabs activeIndex={selectedTab} onTabPressed={onTabPressed} />
      </View>

      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}
        initialPage={selectedTab}>
        <View style={{width: width}}>
          <ContestListMatchPage
            index={0}
            activeIndex={selectedTab}
            onContestCardPress={props.onContestCardPress}
            contests={props.contests}
            err={props.contestsError}
            loading={props.conestsLoading}
          />
        </View>
        <View style={{width: width}}>
          <MatchMyTeamsPage index={1} activeIndex={selectedTab} />
        </View>
        <View style={{width: width}}>
          <MatchCommentary index={2} activeIndex={selectedTab} />
        </View>
        <View style={{width: width}}>
          <MatchScoreBoard
            index={3}
            activeIndex={selectedTab}
            innings={matchMeta.innings}
          />
        </View>
        <View style={{width: width}}>
          <MatchPlayersStats index={4} activeIndex={selectedTab} />
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

const ss = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#0D1320',
  },
  container: {
    padding: 12,
    backgroundColor: '#172338',
  },
});

/**
 * Route Params:
 * match_key [*]
 */
