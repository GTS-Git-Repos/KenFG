import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation} from '@react-navigation/native';

const log = console.log;

export default function FairPlayScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <Text>Hello</Text>
    </View>
  );
}
