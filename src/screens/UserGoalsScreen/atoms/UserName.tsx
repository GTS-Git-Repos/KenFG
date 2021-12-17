import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  name: string;
  level: string;
}

export default function UserName(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'bg-dark-4 rounded-t-xl py-2 px-4 flex-row items-center justify-between',
        ),
      ]}>
      <Text style={[tailwind('font-regular text-white font-11')]}>
        {props.name}
      </Text>
      <Text style={[tailwind('font-regular text-white uppercase font-11')]}>
        Level {props.level}
      </Text>
    </View>
  );
}
