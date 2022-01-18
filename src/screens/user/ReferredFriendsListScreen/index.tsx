import React from 'react';
import {View} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import TotalReferral from './atoms/TotalReferral';
import Person from './atoms/Person';

const log = console.log;

export default function ReferredFriendsListScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Referred Friends'} />
      <TotalReferral />
      <Person received={324} completed={false} />
      <Person received={224} completed={false} />
      <Person received={500} completed={true} />
      <Person received={132} completed={false} />
    </View>
  );
}
