import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents';
import TotalReferral from './atoms/TotalReferral';
import Person from './atoms/Person';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function ReferredFriendsListScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Referred Friends'} />
      <TotalReferral />
      <Person />
      <Person />
      <Person />
      <Person />
    </View>
  );
}
