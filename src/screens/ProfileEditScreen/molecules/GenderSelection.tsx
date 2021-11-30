import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function GenderSelection(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View
        style={[
          tailwind('flex-row border border-gray-400 p-2 rounded items-center'),
          {flex: 5.5},
        ]}>
        <Icon name="male" size={20} color="#B2933D" />
        <Text style={[tailwind('font-regular text-dark-1 px-2 font-15')]}>
          Male
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 1}]}></View>
      <View
        style={[
          tailwind('flex-row border border-gray-400 p-2 rounded items-center'),
          {flex: 5.5},
        ]}>
        <Icon name="female" size={20} color="#B2933D" />
        <Text style={[tailwind('font-regular text-dark-1 px-2 font-15')]}>
          Female
        </Text>
      </View>
    </View>
  );
}
