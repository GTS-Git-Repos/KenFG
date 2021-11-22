import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomLine() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[tailwind('')]}
      colors={['#172338', '#8797B1', '#172338']}>
      <View style={[tailwind(''), {height: 1}]}></View>
    </LinearGradient>
  );
}
