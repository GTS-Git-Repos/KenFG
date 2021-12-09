import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

// import assets from 'assets';
import {TopBar} from '../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;

import ProgressBar from './atoms/ProgressBar';
import RowHeader from './atoms/RowHeader';
import PlayerProfile from './molecules/PlayerProfile';
import CapSelectionAction from './atoms/CapSelectionAction';
import {useDispatch, useSelector} from 'react-redux';
import {allPlayers, playersCountByTeams} from '../../store/selectors';
import {captainSelection} from '../../store/actions/teamActions';

export default function CapSelectionScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const TeamsSelector = useSelector(playersCountByTeams);
  const AllPlayers = useSelector(allPlayers);

  // log(AllPlayers)

  const captainSelectAction = (player_key: string) => {
    dispatch(captainSelection(player_key));
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'15h 33m Left'} teams={Object.keys(TeamsSelector)} />
      <ScrollView>
        <View style={[tailwind('bg-dark-3 py-4')]}>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
            Choose your Captain and Vice Captain
          </Text>
          <Text
            style={[
              tailwind('font-regular text-center text-dark-1 py-2 font-13'),
            ]}>
            C Gets 2x Points, VC gets 1.5x Points
          </Text>
        </View>
        <RowHeader />
        {AllPlayers.map((item: any) => {
          return (
            <PlayerProfile
              key={item.key}
              player_key={item.key}
              name={item.name}
              points={item.points}
              teamname={item.team_key}
              title={'BAT'}
              c={'43.3%'}
              vc={'8.3%'}
              is_captain={item.cap}
              is_vice_captain={item.vc}
              captainSelectAction={captainSelectAction}
            />
          );
        })}

        <View style={[tailwind('h-16')]}></View>
      </ScrollView>
      <View
        style={[tailwind('absolute bottom-0 w-full flex-row justify-center')]}>
        <CapSelectionAction />
      </View>
    </View>
  );
}
