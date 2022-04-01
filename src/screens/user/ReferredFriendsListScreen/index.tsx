import React from 'react';
import {View, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import TotalReferral from './atoms/TotalReferral';
import Person from './atoms/Person';
import {useSelector} from 'react-redux';
import {appTheme} from '../../../store/selectors/app.selector';

const log = console.log;

export default function ReferredFriendsListScreen() {
  const tm = useSelector(appTheme);
  const navigation = useNavigation();

  return (
    <View style={[tailwind('h-full'), tm.bg]}>
      <TopBar text={'Referred Friends'} />
      <ScrollView>
        <TotalReferral tm={tm} />
        <Person tm={tm} received={324} completed={false} />
        <Person tm={tm} received={224} completed={false} />
        <Person tm={tm} received={500} completed={true} />
        <Person tm={tm} received={132} completed={false} />
      </ScrollView>
    </View>
  );
}
