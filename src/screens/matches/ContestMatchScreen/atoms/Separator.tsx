import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function Separator() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[tailwind(''), {height: 2}]}
      colors={[
        '#162339',
        '#29344B',
        '#29344B',
        '#29344B',
        '#29344B',
        '#162339',
      ]}></LinearGradient>
  );
}
