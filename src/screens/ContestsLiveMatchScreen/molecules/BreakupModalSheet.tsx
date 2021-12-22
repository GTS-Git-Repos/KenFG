import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function BreakupModalSheet(props: PropTypes) {
  return (
    <View style={[tailwind('box')]}>
      <Text style={[tailwind('font-regular font-15')]}>HEllo</Text>
    </View>
  );
}
