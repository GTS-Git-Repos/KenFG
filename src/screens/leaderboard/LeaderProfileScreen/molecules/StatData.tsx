import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  points: string;
  type: any;
}

export default function StateData(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'px-4 py-2 bg-dark-3 border-b border-gray-800 flex-row items-center justify-between',
        ),
      ]}>
      <View>
        <Text style={[tailwind('font-bold text-white font-14')]}>
          PAK VS SCO (T1)
        </Text>
        <Text style={[tailwind('font-regular py-1 text-dark-1 font-12')]}>
          Sun 7th Nov
        </Text>
      </View>
      <Text style={[tailwind('font-bold text-white font-14')]}>
        {props.points}
      </Text>
    </View>
  );
}
