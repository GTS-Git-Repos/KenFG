import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents/';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

import TeamsCard from './molecules/TeamsCard';

export default function TeamsListScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'My Teams'} />
      <Text style={[tailwind('font-bold text-light p-4 bg-primary')]}>
        Choose a Team to Replace Team 1
      </Text>

      <Text style={[tailwind('font-bold text-light p-4 font-15')]}>
        Already Joined
      </Text>
      <TeamsCard />
    </View>
  );
}