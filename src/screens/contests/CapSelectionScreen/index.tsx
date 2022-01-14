import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

// import assets from 'assets';
import {TopBar, BlockScreenByLoading, BottomLine} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;

import RowHeader from './atoms/RowHeader';
import PlayerProfile from './molecules/PlayerProfile';
import CapSelectionAction from './atoms/CapSelectionAction';
import {useDispatch, useSelector} from 'react-redux';
import {
  allSelecdtedPlayers,
  creditLeft,
  playersByRole,
  rolesCount,
  selectedMatch,
} from '../../../store/selectors';
import {
  captainSelection,
  vicecaptainSelectionAction,
  clearTeamAction,
} from '../../../store/actions/teamActions';
import {isPlayerCaptain, isPlayerViceCaptain} from '../../../store/store_utils';
import {errorBox} from '../../../utils/snakBars';
import {createTeamRemote} from '../../../remote/matchesRemote';
import {createTeamObjCreator} from '../../../workers/objCreators';
import {resetContestListNavigation} from '../../../utils/resetNav';

export default function CapSelectionScreen() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const route = useRoute<any>();
  const [loading, setLoading] = useState(false);

  // const teamsState = useSelector<any>(state => state.team);

  const playersByRoleSelector = useSelector(playersByRole);
  const matchSelector: any = useSelector(selectedMatch);
  const rolesCountSelector: any = useSelector(rolesCount);
  const availableCredits = useSelector(creditLeft);

  const playersState: any = useSelector<any>(state => state.team.players);
  const captain_key = useSelector<any>(state => state.team.cap_key);
  const vc_key = useSelector<any>(state => state.team.vc_key);
  const selected_match: any = useSelector<any>(
    state => state.app.selected_match,
  );
  const selected_contest: any = useSelector<any>(
    state => state.app.selected_contest,
  );

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

  const navigateToTeamPreviewScreeen = () => {
    navigation.navigate('TeamPreviewScreen', {
      from: 1,
      keepers: playersState.filter(
        (item: any) => item.seasonal_role === 'keeper',
      ),
      batsman: playersState.filter(
        (item: any) => item.seasonal_role === 'batsman',
      ),
      all_rounder: playersState.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      ),
      bowler: playersState.filter(
        (item: any) => item.seasonal_role === 'bowler',
      ),
      cap_key: captain_key,
      vc_key: vc_key,
      team_a: {
        key: matchSelector.team_a,
        count: rolesCountSelector[matchSelector.team_a],
      },
      team_b: {
        key: matchSelector.team_b,
        count: rolesCountSelector[matchSelector.team_b],
      },
      credits_left: availableCredits,
    });
  };

  const saveTeam = async () => {
    try {
      if (captain_key && vc_key) {
        setLoading(true);
        const createTeamObj = createTeamObjCreator();
        const response = await createTeamRemote(createTeamObj);
        if (response) {
          dispatch(clearTeamAction());
          resetContestListNavigation(navigation, {
            match_key: selected_match.match_key,
            contest_key: selected_contest,
            team_key: response.team_key,
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
      <TopBar text={matchSelector.titleString} />
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
              is_team_a={item.team_key === matchSelector.team_a}
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
              is_team_a={item.team_key === matchSelector.team_a}
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
              is_team_a={item.team_key === matchSelector.team_a}
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
              is_team_a={item.team_key === matchSelector.team_a}
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
        <CapSelectionAction navigateToTeamPreviewScreeen={navigateToTeamPreviewScreeen} saveTeam={saveTeam} />
      </View>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
