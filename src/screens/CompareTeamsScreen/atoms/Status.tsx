import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function Status(props: PropTypes) {
  return (
    <View style={[tailwind('pt-3 pb-5 flex-row items-center justify-center')]}>
      <Text style={[tailwind('font-regular text-center text-light font-15')]}>
        Your opponent is leading by
      </Text>
      <Text
        style={[tailwind('font-bold text-center px-2 text-secondary font-15')]}>
        109.5 pts
      </Text>
    </View>
  );
}
