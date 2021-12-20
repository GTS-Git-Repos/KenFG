import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TopBar, TeamsCard} from '../../sharedComponents/';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

import TeamSwitch from './molecules/TeamSwitch';

export default function TeamsListScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Switch Teams'} />
      <Text style={[tailwind('font-regular text-white p-3 bg-dark-3 font-14')]}>
        Choose a Team to Replace Team 1
      </Text>

      <Text style={[tailwind('font-bold text-light p-4 font-15')]}>
        Already Joined
      </Text>
      <ScrollView>
        <TeamsCard teams_key={''} canModify={false} />
      </ScrollView>
      <TeamSwitch current={'Team 1'} />
    </View>
  );
}
