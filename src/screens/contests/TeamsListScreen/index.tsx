import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TopBar, TeamsCard, RadioButton} from '../../../sharedComponents';
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

      <ScrollView>
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('flex-grow py-1 pl-3')]}>
            <TeamsCard teams_key={''} canModify={false} current={true} />
          </View>
          <View style={[tailwind('px-2')]}>
            <RadioButton selected={true} />
          </View>
        </View>
        <Text style={[tailwind('font-bold text-light p-4 font-15')]}>
          Already Joined
        </Text>
        <View style={[tailwind('px-3')]}>
          <TeamsCard teams_key={''} canModify={false} current={false} />
        </View>
      </ScrollView>
      <TeamSwitch current={'Team 1'} />
    </View>
  );
}
