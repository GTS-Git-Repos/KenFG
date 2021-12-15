import React, {
  useRef,
  useState,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FullScreenLoading, BlockScreenByLoading} from '../../sharedComponents/';
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
} from '../../store/actions/teamActions';
// import {getMatchPlayersRemote} from '../../remote/serviceRemote';
import {getMatchPlayersRemote} from '../../remote/matchesRemote';
import {useQuery} from 'react-query';

import {useSelector, useDispatch} from 'react-redux';
import {
  creditLeft,
  playersCountByTeams,
  rolesCount,
} from '../../store/selectors';
import {isPlayerCanBeSelectable} from '../../workers/decision';
import {errorBox} from '../../utils/snakBars';
import TabItem from './atoms/TabItem';
import ClearTeamSheet from './atoms/ClearTeamSheet';
import CreateTeamFilterSheetTitle from './atoms/CreateTeamFilterSheetTitle';
import PlayerFilterSheet from './molecules/PlayerFilterSheet';

const log = console.log;

export default function CreateTeamScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const pageRef = useRef<PagerView>(null);
  const clearRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();
  const dispatch = useDispatch();
  const filterSheet = useRef<Modalize>();

  const playersState: any = useSelector<any>(state => state.team.players);

  const availableCredits = useSelector(creditLeft);
  const playersCount = useSelector(playersCountByTeams);
  const SelectedMatchState = useSelector(state => state.app.selected_match);

  const [loading, setLoading] = useState<boolean>(false);

  const [activeIndex, setActiveIndex] = useState(0);

  // selectors

  const rolesCountSelector: any = useSelector(rolesCount);

  // remote sevice query
  const players: any = useQuery(
    ['players', SelectedMatchState.match_key],
    getMatchPlayersRemote,
    {
      cacheTime: 0,
    },
  );

  // side effects

  useEffect(() => {
    dispatch(updateTeamCountAction(playersCount));
    dispatch(updateCreditsAction(availableCredits));
  }, [playersState]);

  // business logic

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  // Create Team Logic

  const checkPlayerSelection = (player_key: string, player_role: string) => {
    const player = players.data[0][player_role].find(
      (item: any) => item.key === player_key,
    );
    if (player) {
      const canBeSelected: any = isPlayerCanBeSelectable(players.data, player);
      if (canBeSelected.result) {
        dispatch(updatePlayerAction(player));
      } else {
        errorBox(canBeSelected.message);
        log(canBeSelected);
      }
    }
  };

  const clearTeam = () => {
    dispatch(clearTeamAction());
    clearRef?.current?.close();
  };

  const navigateToCapSelection = () => {
    try {
      if (playersState.length === 11) {
        // check is all minimum roles are satisfied
        const minRoles: any = {
          bowler: 3,
          batsman: 3,
          keeper: 1,
          all_rounder: 1,
        };
        const keepersSlots = playersState.filter(
          (item: any) => item.seasonal_role === 'keeper',
        );
        const batsmanSlots = playersState.filter(
          (item: any) => item.seasonal_role === 'batsman',
        );
        const all_roundedSlots = playersState.filter(
          (item: any) => item.seasonal_role === 'all_rounder',
        );
        const bowler_Slots = playersState.filter(
          (item: any) => item.seasonal_role === 'bowler',
        );

        if (keepersSlots.length < minRoles.keeper) {
          throw 'Minimum 1 keeper required';
        }
        if (batsmanSlots.length < minRoles.batsman) {
          throw 'Minimum 3 batsmans required';
        }
        if (all_roundedSlots.length < minRoles.all_rounder) {
          throw 'Minimum 1 All Rounder required';
        }
        if (bowler_Slots.length < minRoles.bowler) {
          throw 'Minimum 3 bowlers required';
        }
        navigation.navigate('CapSelectionScreen'),
          {
            match_key: !route?.params?.match_key,
          };
      } else {
        throw 'Team requires total 11 players';
      }
    } catch (err: any) {
      errorBox(err);
    }
  };

  if (isScreenReady === false || !players.data) {
    return <FullScreenLoading title="Loading..." />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarCreateTeam />
      <LinearGradient colors={['#172338', '#0D1320']}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#172338', '#0D1320']}>
          <MatchStatus text={'MAX 7 PLAYERS FROM A TEAM'} />
          <Line />

          <TeamInfo
            teamname1={'AUS'}
            teamname2={'ENG'}
            teamcount1={playersCount['aus'].length}
            teamcount2={playersCount['eng'].length}
            credits_left={availableCredits}
          />
        </LinearGradient>
        <Line />
        <SelectionIndicator
          clearRef={clearRef}
          count={playersCount['aus'].length + playersCount['eng'].length}
        />
      </LinearGradient>

      {/* Tabs */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[tailwind('bg-dark-3')]}>
          {[
            {
              tab_key: 'keeper',
              tab_name: 'WK',
            },
            {
              tab_key: 'batsman',
              tab_name: 'BAT',
            },
            {
              tab_key: 'all_rounder',
              tab_name: 'AR',
            },
            {
              tab_key: 'bowler',
              tab_name: 'BOWL',
            },
          ].map((item: any, index: number) => {
            return (
              <TabItem
                key={item.tab_key}
                tabName={item.tab_name}
                count={rolesCountSelector[item.tab_key]}
                active={activeIndex === index}
                onTabPressed={onTabPressed}
                index={index}
              />
            );
          })}
        </ScrollView>

        {/* <Tabs activeIndex={activeIndex} onTabPressed={onTabPressed} /> */}
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
            data={players.data[0]?.keeper}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'bat'}
            title={'Select 3-6 Batters'}
            data={players.data[0]?.batsman}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'ar'}
            title={'Select 1-4 All Rounders'}
            data={players.data[0]?.all_rounder}
          />
        </View>
        <View>
          <Page
            filterSheet={filterSheet}
            checkPlayerSelection={checkPlayerSelection}
            id={'bwl'}
            title={'Select 3-6 Bowlers'}
            data={players.data[0]?.bowler}
          />
        </View>
      </PagerView>
      <View
        style={[tailwind('absolute bottom-0 w-full flex-row justify-center')]}>
        <BottomAction navigateToCapSelection={navigateToCapSelection} />
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

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
