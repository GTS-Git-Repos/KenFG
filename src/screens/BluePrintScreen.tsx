import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useCountDown} from '../shared_hooks/app.hooks';

import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function BluePrintScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <Text>Hello</Text>
    </View>
  );
}
