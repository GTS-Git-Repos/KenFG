import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import { useIsScreenReady } from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function BluePrintScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('px-4 bg-gray-400')}>
      <Text>Hello</Text>
    </View>
  );
}
