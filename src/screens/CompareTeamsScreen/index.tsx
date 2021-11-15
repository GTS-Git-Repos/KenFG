import React from 'react';
import {View, Text, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;

export default function CompareTeamScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-black h-full')}>
      <TopBar text={'Compare Teams'} />
    </View>
  );
}
