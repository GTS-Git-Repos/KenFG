import React, {
  useRef,
  useState,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
} from '../../store/actions/teamActions';
import {getMatchPlayersRemote} from '../../remote/serviceRemote';
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

const log = console.log;

export default function CreateTeamScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const pageRef = useRef<PagerView>(null);
  const clearRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();
  const dispatch = useDispatch();

  const playersState: any = useSelector<any>(state => state.team.players);
  const s = useSelector<any>(state => state.team);

  // log(s)

  const availableCredits = useSelector(creditLeft);
  const playersCount = useSelector(playersCountByTeams);

  const [loading, setLoading] = useState<boolean>(false);

  const [activeIndex, setActiveIndex] = useState(0);

  // selectors

  const rolesCountSelector: any = useSelector(rolesCount);

  // remote sevice query
  const players: any = useQuery('players', getMatchPlayersRemote, {
    cacheTime: 0,
  });

  // side effects

  useEffect(() => {
    dispatch(updateTeamCountAction(playersCount));
    dispatch(updateCreditsAction(availableCredits));
  }, [playersState]);

  useEffect(() => {
    if (players.data) {
      // log(players.data[0].keepers);
    }
  }, [players.data]);

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

  const navigateToCapSelection = () => {
    if (playersState.length === 11) {
      navigation.navigate('CapSelectionScreen');
    } else {
      errorBox('Team requires total 11 players');
    }
  };

  if (isScreenReady === false || !players.data) {
    return <FullScreenLoading title="Loading..." />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarCreateTeam />
      <LinearGradient colors={['#C5A858', '#B2933D']}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#C5A858', '#B2933D']}>
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
            checkPlayerSelection={checkPlayerSelection}
            id={'wkt'}
            title={'Select 1-4 Wicket Keepers'}
            data={players.data[0]?.keeper}
          />
        </View>
        <View>
          <Page
            checkPlayerSelection={checkPlayerSelection}
            id={'bat'}
            title={'Select 3-6 Batters'}
            data={players.data[0]?.batsman}
          />
        </View>
        <View>
          <Page
            checkPlayerSelection={checkPlayerSelection}
            id={'ar'}
            title={'Select 1-4 All Rounders'}
            data={players.data[0]?.all_rounder}
          />
        </View>
        <View>
          <Page
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
        <View style={[tailwind('bg-dark-4 px-3 py-5')]}>
          <Text
            style={[tailwind('font-bold pb-4 text-light text-center font-16')]}>
            Clear Team ?
          </Text>
          <Text
            style={[
              tailwind(
                'font-regular pb-2 text-light text-center mx-10 font-12',
              ),
            ]}>
            Are you sure you want to clear your player selections ?
          </Text>

          <LinearGradient
            start={{x: 0.8, y: 2.0}}
            end={{x: 0.3, y: 0.5}}
            locations={[0.6, 0.5]}
            style={[tailwind('flex-row  m-2 rounded')]}
            colors={['#00513B', '#006A4D']}>
            <TouchableOpacity style={[tailwind('flex-grow py-3')]}>
              <Text
                style={[
                  tailwind(
                    'font-bold uppercase text-light flex-grow text-center font-12',
                  ),
                ]}>
                Yes Clear
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            start={{x: 0.8, y: 2.0}}
            end={{x: 0.3, y: 0.5}}
            locations={[0.6, 0.5]}
            style={[tailwind('flex-row  m-2 rounded')]}
            colors={['#1C2B46', '#172338']}>
            <TouchableOpacity style={[tailwind('flex-grow py-3')]}>
              <Text
                style={[
                  tailwind(
                    'font-bold uppercase text-light text-center font-12',
                  ),
                ]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modalize>

      {loading && <BlockScreenByLoading />}
    </View>
    // </MyContext.Provider>
  );
}

// start={{x: 0.2, y: 1.1}}
// end={{x: 1, y: 0.1}}
// locations={[0.4, 0]}
// colors={['#C5A858', '#B2933D']}>
