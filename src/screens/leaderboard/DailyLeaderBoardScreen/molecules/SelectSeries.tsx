import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function SelectSeries(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <Text
        style={[tailwind('font-regular font-12'), props.dT ? clr.tw : clr.td1]}>
        Abu Dhabi
      </Text>
      <Icon
        name="chevron-down-outline"
        size={16}
        color={props.dT ? '#8797B1' : 'gray'}
      />
    </View>
  );
}
