import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function AchievementScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Achievement'} />
      <Text style={[tailwind('font-regular m-4 text-white font-15')]}>
        Comming Soon
      </Text>
    </View>
  );
}
