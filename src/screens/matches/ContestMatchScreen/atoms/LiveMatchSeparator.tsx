import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

export default function LiveMatchSeparator() {
  // will be removed
  return null;
  return (
    // <LinearGradient colors={['#172338', '#8797B1', '#172338']}>
    <View style={[tailwind('border-b border-gray-800'), {height: 1}]}></View>
    // </LinearGradient>
  );
}
