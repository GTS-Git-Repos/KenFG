import React, {
  useRef,
  useState,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  FullScreenLoading,
  BlockScreenByLoading,
} from '../../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
import TopBarCreateTeam from './atoms/TopBarCreateTeam';
import MatchStatus from './atoms/MatchStatus';
import TeamInfo from './molecules/TeamInfo';
import SelectionIndicator from './atoms/SelectionIndicator';
import Tabs from './atoms/Tabs';
import Line from './atoms/Line';
import BottomAction from './molecules/BottomAction';
import Page from './molecules/Page';
import {Modalize} from 'react-native-modalize';
import {
  updateCreditsAction,
  updatePlayerAction,
  updateTeamCountAction,
  clearTeamAction,
  saveAllPlayersAction,
  updateErrorMsgAction,
  updateTeamAction,
} from '../../../store/actions/teamActions';
// import {getMatchPlayersRemote} from '../../remote/serviceRemote';
import {getMatchPlayersRemote} from '../../../remote/matchesRemote';
import {useQuery} from 'react-query';

import {useSelector, useDispatch} from 'react-redux';
import {creditLeft, rolesCount, selectedMatch} from '../../../store/selectors';
// import {isPlayerCanBeSelectable} from '../../workers/decision';
import {errorBox} from '../../../utils/snakBars';
import ClearTeamSheet from './atoms/ClearTeamSheet';
import CreateTeamFilterSheetTitle from './atoms/CreateTeamFilterSheetTitle';
import PlayerFilterSheet from './molecules/PlayerFilterSheet';
import CreateTeamLoading from './atoms/CreateTeamLoading';
import ScrollTabs from './molecules/ScrollTabs';
import LoadFailedTeamFormation from './atoms/loadfailed.teamformation';
import {log} from '../../../utils/logs';

interface PropTypes {
  players: any;
  rolesCount: any;
  creditsLeft: number;
  match: any;
  navigateToCapSelection(): any;
  navigateToTeamPreviewScreeen(): any;
}

export default function TeamFormationScreen(props: PropTypes) {
  const pageRef = useRef<PagerView>(null);
  const clearRef = useRef<any>(null);
  const dispatch = useDispatch();
  const filterSheet = useRef<Modalize>();

  const ErrorMessageState: any = useSelector<any>(
    state => state.team.error_message,
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ErrorMessageState?.message) {
      errorBox(ErrorMessageState?.message);
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
      <TopBarCreateTeam />
      <LinearGradient colors={['#172338', '#0D1320']}>
        <LinearGradient colors={['#172338', '#0D1320']}>
          <MatchStatus text={'MAX 7 PLAYERS FROM A TEAM'} />
          <Line />

          <TeamInfo
            teamname1={props.match.team_a}
            teamname2={props.match.team_b}
            teamcount1={props.rolesCount[props.match.team_a]}
            teamcount2={props.rolesCount[props.match.team_b]}
            credits_left={props.creditsLeft}
          />
        </LinearGradient>
        <Line />
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
        style={{flex: 1}}
        initialPage={0}>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'wkt'}
            title={'Select 1-4 Wicket Keepers'}
            data={props.players[0]?.keeper}
            rolesCountSelector={props.rolesCount}
            index={0}
            activeIndex={activeIndex}
            team_a={props.match.team_a}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'bat'}
            title={'Select 3-6 Batters'}
            data={props.players[0]?.batsman}
            rolesCountSelector={props.rolesCount}
            index={1}
            activeIndex={activeIndex}
            team_a={props.match.team_a}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'ar'}
            title={'Select 1-4 All Rounders'}
            data={props.players[0]?.all_rounder}
            rolesCountSelector={props.rolesCount}
            index={2}
            activeIndex={activeIndex}
            team_a={props.match.team_a}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'bwl'}
            title={'Select 3-6 Bowlers'}
            data={props.players[0]?.bowler}
            rolesCountSelector={props.rolesCount}
            index={3}
            activeIndex={activeIndex}
            team_a={props.match.team_a}
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

      <Modalize
        ref={filterSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}
        HeaderComponent={
          <CreateTeamFilterSheetTitle filterSheet={filterSheet} />
        }>
        <PlayerFilterSheet />
      </Modalize>
    </View>
  );
}
