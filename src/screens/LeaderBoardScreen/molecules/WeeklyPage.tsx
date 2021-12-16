import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function WeeklyPage(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <Text style={[tailwind('font-regular font-15')]}>HEllo</Text>
    </View>
  );
}
