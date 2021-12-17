import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function PlayerSince(props: PropTypes) {
  return (
    <LinearGradient
      style={[tailwind('m-3 p-2 rounded')]}
      colors={['#172338', '#172338']}>
      <Text style={[tailwind('font-regular text-white font-12 text-center')]}>
        You are playing with kenfg since 04-12-2021
      </Text>
    </LinearGradient>
  );
}
