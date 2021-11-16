import React from 'react';
import {View, Text, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import FantasyPlayer from './atoms/FantasyPlayer';
import Points from './atoms/Points';
const log = console.log;

export default function CompareTeamScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-black h-full')}>
      <TopBar text={'Compare Teams'} />
      <FantasyPlayer
        player1="The Fantasy Player name"
        player2="The Another Player name"
      />
      <Points />
      <View
        style={[
          tailwind('flex-row bg-primary py-3 justify-center items-center'),
        ]}>
        <Text style={[tailwind('font-bold  text-center text-light font-17')]}>
          Your opponent is leading by
        </Text>
        <Text
          style={[tailwind('font-bold px-2 text-center font-17 text-red-500')]}>
          16pts
        </Text>
      </View>
    </View>
  );
}
