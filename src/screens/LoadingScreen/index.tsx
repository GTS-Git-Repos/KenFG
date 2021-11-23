import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';

const log = console.log;

export default function LoadingScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={route?.params?.title} />
    </View>
  );
}
