import React, {useRef, useState, useEffect} from 'react';
import {View} from 'react-native';
import tailwind from '../../../../tailwind';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
import TopBarCreateTeam from './atoms/TopBarCreateTeam';
import MatchStatus from './atoms/MatchStatus';
import TeamInfo from './molecules/TeamInfo';
import SelectionIndicator from './atoms/SelectionIndicator';
import BottomAction from './molecules/BottomAction';
import Page from './molecules/Page';
import {Modalize} from 'react-native-modalize';
import {
  updatePlayerAction,
  clearTeamAction,
} from '../../../store/actions/teamActions';

import {useSelector, useDispatch} from 'react-redux';
import {errorBox} from '../../../utils/snakBars';
import ClearTeamSheet from './atoms/ClearTeamSheet';
import FilterByTeamSheet from './atoms/filterByTeam.teamformationSheet';
import ScrollTabs from './molecules/ScrollTabs';
import {log} from '../../../utils/logs';

interface PropTypes {
  players: any;
  rolesCount: any;
  creditsLeft: number;
  match: any;
  countDown: any;
  filterSheet: any;
  filters: any;
  sortByLowCredits: boolean;
  blockListPlayers: Array<string>;
  sortStatus: any;
  setSortByLowCredits(bool: boolean): any;
  setFilter(team_key: string): any;
  navigateToCapSelection(): any;
  navigateToTeamPreviewScreeen(): any;
  onPressPlayerProfile(player_key: string, player_role: string): any;
}

export default function TeamFormationScreen(props: PropTypes) {
  const pageRef = useRef<PagerView>(null);
  const clearRef = useRef<any>(null);
  const dispatch = useDispatch();

  const ErrorMessageState: any = useSelector<any>(
    state => state.team.error_message,
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ErrorMessageState?.message) {
      errorBox(ErrorMessageState?.message, 0);
    }
  }, [ErrorMessageState]);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  const checkPlayerSelection = (player_key: string, player_role: string) => {
    dispatch(updatePlayerAction({key: player_key, role: player_role}));
    return;
  };

  const clearTeam = () => {
    dispatch(clearTeamAction());
    clearRef?.current?.close();
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarCreateTeam countDown={props.countDown} />
      <LinearGradient colors={['#172338', '#0D1320']}>
        <LinearGradient colors={['#172338', '#0D1320']}>
          <MatchStatus text={'MAX 7 PLAYERS FROM A TEAM'} />

          <TeamInfo
            teamname1={props.match.team_a}
            teamname2={props.match.team_b}
            teamcount1={props.rolesCount[props.match.team_a]}
            teamcount2={props.rolesCount[props.match.team_b]}
            credits_left={props.creditsLeft}
          />
        </LinearGradient>

        <SelectionIndicator
          clearRef={clearRef}
          count={
            props.rolesCount[props.match.team_a] +
            props.rolesCount[props.match.team_b]
          }
        />
      </LinearGradient>

      {/* Tabs */}
      <View>
        <ScrollTabs
          activeIndex={activeIndex}
          onTabPressed={onTabPressed}
          rolesCountSelector={props.rolesCount}
        />
      </View>

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        offscreenPageLimit={2}
        style={{flex: 1}}
        initialPage={0}>
        <View>
          <Page
            sortByLowCredits={props.sortByLowCredits}
            setSortByLowCredits={props.setSortByLowCredits}
            filterSheet={props.filterSheet}
            filters={props.filters}
            checkPlayerSelection={checkPlayerSelection}
            id={'wkt'}
            title={'Select 1-4 Wicket Keepers'}
            data={props.players[0]?.keeper}
            rolesCountSelector={props.rolesCount}
            index={0}
            activeIndex={activeIndex}
            team_a_key={props.match.team_a}
            team_b_key={props.match.team_b}
            blockListPlayers={props.blockListPlayers}
            sortStatus={props.sortStatus}
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
        </View>
        <View>
          <Page
            sortByLowCredits={props.sortByLowCredits}
            setSortByLowCredits={props.setSortByLowCredits}
            filterSheet={props.filterSheet}
            filters={props.filters}
            checkPlayerSelection={checkPlayerSelection}
            id={'bat'}
            title={'Select 3-6 Batters'}
            data={props.players[0]?.batsman}
            rolesCountSelector={props.rolesCount}
            index={1}
            activeIndex={activeIndex}
            team_a_key={props.match.team_a}
            team_b_key={props.match.team_b}
            blockListPlayers={props.blockListPlayers}
            sortStatus={props.sortStatus}
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
        </View>
        <View>
          <Page
            sortByLowCredits={props.sortByLowCredits}
            setSortByLowCredits={props.setSortByLowCredits}
            filterSheet={props.filterSheet}
            filters={props.filters}
            checkPlayerSelection={checkPlayerSelection}
            id={'ar'}
            title={'Select 1-4 All Rounders'}
            data={props.players[0]?.all_rounder}
            rolesCountSelector={props.rolesCount}
            index={2}
            activeIndex={activeIndex}
            team_a_key={props.match.team_a}
            team_b_key={props.match.team_b}
            blockListPlayers={props.blockListPlayers}
            sortStatus={props.sortStatus}
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
        </View>
        <View>
          <Page
            sortByLowCredits={props.sortByLowCredits}
            setSortByLowCredits={props.setSortByLowCredits}
            filterSheet={props.filterSheet}
            filters={props.filters}
            checkPlayerSelection={checkPlayerSelection}
            id={'bwl'}
            title={'Select 3-6 Bowlers'}
            data={props.players[0]?.bowler}
            rolesCountSelector={props.rolesCount}
            index={3}
            activeIndex={activeIndex}
            team_a_key={props.match.team_a}
            team_b_key={props.match.team_b}
            blockListPlayers={props.blockListPlayers}
            sortStatus={props.sortStatus}
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
        </View>
      </PagerView>
      <View
        style={[tailwind('absolute bottom-0 w-full flex-row justify-center')]}>
        <BottomAction
          navigateToCapSelection={props.navigateToCapSelection}
          navigateToTeamPreviewScreeen={props.navigateToTeamPreviewScreeen}
        />
      </View>

      <Modalize
        ref={clearRef}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <ClearTeamSheet clearTeam={clearTeam} clearRef={clearRef} />
      </Modalize>

      {/* {console.log(props.match)} */}

      <Modalize
        ref={props.filterSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}>
        <FilterByTeamSheet
          filterSheet={props.filterSheet}
          team_a_key={props.match.team_a}
          team_b_key={props.match.team_b}
          team_a_name={props.match.team_a_name}
          team_b_name={props.match.team_b_name}
          filters={props.filters}
          setFilter={props.setFilter}
        />
      </Modalize>
    </View>
  );
}
