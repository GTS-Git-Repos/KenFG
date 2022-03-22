// player info  from team formation screen

import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import ProfileCard from './atoms/ProfileCard';
import AddedTeam from './molecules/AddedTeam';
import SubTitle from './atoms/SubTitle';
import MatchesStats from './molecules/MatchesStats';
import {updatePlayerAction} from '../../../store/actions/teamActions';
import {useDispatch} from 'react-redux';

const log = console.log;

export default function PlayerProfileHOC() {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const playerInfo: any = route.params.payload;
  const matchStats: any = route.params.payload.recent_performance;

  function onPressPlayerAddButton(player_key: string, player_role: string) {
    dispatch(updatePlayerAction({key: player_key, role: player_role}));
    navigation.goBack();
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Player Info'} />
      <ScrollView>
        <ProfileCard
          playerName={playerInfo.name}
          teamCode={playerInfo.team_key}
          role={playerInfo.seasonal_role}
          anounced={false}
          team_a={false}
        />
        <SubTitle text={'In your teams'} />
        <AddedTeam />
        <SubTitle text={'Matchwise Fantasy Systems'} />
        {matchStats.map((item: any) => {
          return (
            <MatchesStats
              key={item.match_key}
              op_team={'BBL'}
              date={'23 May 2022'}
              selected_by={'23%'}
              points={item.points}
              credits={item.match_rank}
            />
          );
        })}

        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
      <View style={[tailwind('m-2 absolute bottom-0 w-full')]}>
        <View style={[tailwind('flex-row justify-center')]}>
          <TouchableOpacity
            onPress={() =>
              onPressPlayerAddButton(playerInfo.key, playerInfo.seasonal_role)
            }
            style={[
              tailwind('px-8 py-3 rounded'),
              {backgroundColor: '#00513B'},
            ]}>
            <Text style={[tailwind('font-bold uppercase text-light font-12')]}>
              Add To Team
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
