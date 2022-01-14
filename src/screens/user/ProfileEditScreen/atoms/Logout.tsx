import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function LogOut(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'my-5 flex-row border border-red-700 rounded p-3 items-center',
        ),
      ]}>
      <Icon name="power" size={20} color="#d63031" />
      <Text
        style={[
          tailwind('font-bold text-red-500 px-2 uppercase font-15'),
          {color: '#d63031'},
        ]}>
        Logout
      </Text>
    </View>
  );
}
