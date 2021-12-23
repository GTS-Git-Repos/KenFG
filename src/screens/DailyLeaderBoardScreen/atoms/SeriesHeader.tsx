import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function SeriesHeader(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center px-6 py-3 bg-dark-3 justify-between border-b border-gray-800',
        ),
      ]}>
      <Text style={[tailwind('font-bold font-12 text-white')]}>TEAM</Text>
      <Text style={[tailwind('font-bold font-12 text-white')]}>RANK</Text>
    </View>
  );
}
