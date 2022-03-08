import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  TopBar,
  MatchStat,
  Projection,
  CurrentLiveStatus,
  ExpertsStats,
  PageLoadingSpinner,
  MatchPlayersStats,
} from '../../../sharedComponents';
import Tabs from './atoms/Tabs';
import PagerView from 'react-native-pager-view';
import ContestListMatchPage from './molecules/contest.list.match';
import {MatchCommentary, MatchScoreBoard} from '../../../sharedComponents';
import MatchMyTeamsPage from './molecules/match.myteams.page';
import LinearGradient from 'react-native-linear-gradient';
import {Modalize} from 'react-native-modalize';
import BreakupModalSheet from './molecules/BreakupModalSheet';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {useMatchMeta} from '../../../shared_hooks/contest.hooks';
import {toLiveMatch} from '../../../store/actions/navigationActions';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

interface PropTypes {
  activeTab: number;
  contests: Array<any>;
  teams: Array<any>;
  commentry: Array<any>;
  scoreBoard: Array<any>;
  playerStats: Array<any>;
  onContestMatchPress(contest_key: string): void;
}

export default function LiveMatchScreen(props: PropTypes) {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const pagerRef = useRef<any>();
  const breakUpSheet = useRef();
  const {width} = useWindowDimensions();

  const userMeta = useSelector(userInfo);

  // Local state
  const [selectedTab, setSelectedTab] = useState(0);

  const {matchMeta, matchAPI}: any = useMatchMeta(
    route.params.match_key,
    userMeta.mobile,
  );

  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  // need to change that
  if (!matchAPI) {
    return <PageLoadingSpinner title={'Loading...'} />;
  }

  if (matchAPI && !matchMeta) {
    return (
      <Text style={[tailwind('font-regular text-white font-15')]}>
        Failed to Load
      </Text>
    );
  }
  // log(JSON.stringify(matchMeta.score_b))

  // return null
  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar
        text={matchMeta?.match?.short_name}
        helpIcon={true}
        ptsIcon={true}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#172338', '#0D1320']}
        style={[tailwind('p-3 bg-dark-3')]}>
        <MatchStat
          matchStatus={matchMeta.matchStatus}
          team_a={matchMeta.team_a}
          team_b={matchMeta.team_b}
          score_a={matchMeta.score_a}
          score_b={matchMeta.score_b}
        />
        {matchMeta.notification && (
          <Projection completed={false} msg={matchMeta.notification} />
        )}

        <View style={[tailwind('my-2 border-b border-gray-800')]}></View>

        <CurrentLiveStatus
          striker={matchMeta.striker}
          nonStriker={matchMeta.nonStriker}
          bowler={matchMeta.bowler}
          lastOverData={matchMeta.lastOverData}
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
          <ContestListMatchPage
            index={0}
            activeIndex={selectedTab}
            onContestMatchPress={props.onContestMatchPress}
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
  line: {
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8797B1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

/**
 * Route Params:
 * match_key [*]
 */
