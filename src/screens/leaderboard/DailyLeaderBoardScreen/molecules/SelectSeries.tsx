import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function SelectSeries(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-regular text-white font-12')]}>
        Abu Dhabi
      </Text>
      <Icon name="chevron-down-outline" size={16} color="#8797B1" />
    </View>
  );
}
