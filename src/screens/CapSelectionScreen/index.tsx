import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

// import assets from 'assets';
import {TopBar, BlockScreenByLoading, BottomLine} from '../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;

import RowHeader from './atoms/RowHeader';
import PlayerProfile from './molecules/PlayerProfile';
import CapSelectionAction from './atoms/CapSelectionAction';
import {useDispatch, useSelector} from 'react-redux';
import {
  allSelecdtedPlayers,
  playersByRole,
  rolesCount,
} from '../../store/selectors';
import {
  captainSelection,
  vicecaptainSelectionAction,
  clearTeamAction,
} from '../../store/actions/teamActions';
import {isPlayerCaptain, isPlayerViceCaptain} from '../../store/store_utils';
import {errorBox} from '../../utils/snakBars';
import {createTeamRemote} from '../../remote/matchesRemote';
import {createTeamObjCreator} from '../../workers/objCreators';
import {resetContestListNavigation} from '../../utils/resetNav';

export default function CapSelectionScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute<any>();
  const [loading, setLoading] = useState(false);

  // const teamsState = useSelector<any>(state => state.team);

  const playersByRoleSelector = useSelector(playersByRole);

  const teamsState = useSelector<any>(state => state.team.teams);
  const captain_key = useSelector<any>(state => state.team.cap_key);
  const vc_key = useSelector<any>(state => state.team.vc_key);
  const selected_match: any = useSelector<any>(
    state => state.app.selected_match,
  );
  const selected_contest: any = useSelector<any>(
    state => state.app.selected_contest,
  );

  useEffect(() => {
    log('cap --->', teamsState[0]);
  }, []);

  const captainSelectAction = (player_key: string) => {
    if (vc_key === player_key) {
      dispatch(vicecaptainSelectionAction(null));
      dispatch(captainSelection(player_key));
    } else {
      dispatch(captainSelection(player_key));
    }
  };
  const viceCaptainSelect = (player_key: string) => {
    if (captain_key === player_key) {
      dispatch(captainSelection(null));
      dispatch(vicecaptainSelectionAction(player_key));
    } else {
      dispatch(vicecaptainSelectionAction(player_key));
    }
  };

  const saveTeam = async () => {
    try {
      if (captain_key && vc_key) {
        setLoading(true);
        const createTeamObj = createTeamObjCreator();
        log('createTeamObj', createTeamObj);

        const response = await createTeamRemote(createTeamObj);
        if (response) {
          dispatch(clearTeamAction());
          // log(selected_contest);
          resetContestListNavigation(navigation, {
            match_key: selected_match.match_key,
            contest_key: selected_contest,
            // team_key: response.teams[1].teams_key,
            team_key: 't1',
          });
          return;
        } else {
          setTimeout(() => {
            errorBox('Failed to create a Team');
          }, 500);
        }
      } else {
        errorBox('Please select captain and vice captain');
      }
    } catch (err) {
      log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'15h 33m Left'} teams={teamsState} />
      <ScrollView>
        <View style={[tailwind(' px-4 py-3')]}>
          <Text style={[tailwind('font-bold text-center text-dark-1 font-13')]}>
            Choose your Captain and Vice Captain
          </Text>
          <Text
            style={[
              tailwind('font-regular text-center text-dark-1 pt-2 font-13'),
            ]}>
            C Gets 2x Points, VC gets 1.5x Points
          </Text>
        </View>
        <BottomLine />
        <RowHeader />
        {playersByRoleSelector.keeper.map((item: any) => {
          return (
            <PlayerProfile
              key={item.key}
              player_key={item.key}
              name={item.name}
              points={item.points}
              teamname={item.team_key}
              role={'WK'}
              c={'43.3%'}
              vc={'8.3%'}
              is_captain={isPlayerCaptain(item.key)}
              is_vice_captain={isPlayerViceCaptain(item.key)}
              captainSelectAction={captainSelectAction}
              viceCaptainSelect={viceCaptainSelect}
            />
          );
        })}
        <View style={[tailwind('h-1 bg-dark-4')]} />

        {playersByRoleSelector.batsman.map((item: any) => {
          return (
            <PlayerProfile
              key={item.key}
              player_key={item.key}
              name={item.name}
              points={item.points}
              teamname={item.team_key}
              role={'BAT'}
              c={'43.3%'}
              vc={'8.3%'}
              is_captain={isPlayerCaptain(item.key)}
              is_vice_captain={isPlayerViceCaptain(item.key)}
              captainSelectAction={captainSelectAction}
              viceCaptainSelect={viceCaptainSelect}
            />
          );
        })}
        <View style={[tailwind('h-1 bg-dark-4')]} />

        {playersByRoleSelector.all_rounder.map((item: any) => {
          return (
            <PlayerProfile
              key={item.key}
              player_key={item.key}
              name={item.name}
              points={item.points}
              teamname={item.team_key}
              role={'AR'}
              c={'43.3%'}
              vc={'8.3%'}
              is_captain={isPlayerCaptain(item.key)}
              is_vice_captain={isPlayerViceCaptain(item.key)}
              captainSelectAction={captainSelectAction}
              viceCaptainSelect={viceCaptainSelect}
            />
          );
        })}

        <View style={[tailwind('h-1 bg-dark-4')]} />

        {playersByRoleSelector.bowler.map((item: any) => {
          return (
            <PlayerProfile
              key={item.key}
              player_key={item.key}
              name={item.name}
              points={item.points}
              teamname={item.team_key}
              role={'BOWL'}
              c={'43.3%'}
              vc={'8.3%'}
              is_captain={isPlayerCaptain(item.key)}
              is_vice_captain={isPlayerViceCaptain(item.key)}
              captainSelectAction={captainSelectAction}
              viceCaptainSelect={viceCaptainSelect}
            />
          );
        })}

        <View style={[tailwind('h-16')]}></View>
      </ScrollView>
      <View
        style={[tailwind('absolute bottom-0 w-full flex-row justify-center')]}>
        <CapSelectionAction saveTeam={saveTeam} />
      </View>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
