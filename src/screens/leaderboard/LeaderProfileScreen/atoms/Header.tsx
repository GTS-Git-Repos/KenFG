import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function Header(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('px-4 py-2 flex-row bg-dark-4 items-center justify-between'),
      ]}>
      <Text style={[tailwind('font-bold text-white font-12')]}>MATCHES</Text>
      <Text style={[tailwind('font-bold text-white font-12')]}>POINTS</Text>
    </View>
  );
}
