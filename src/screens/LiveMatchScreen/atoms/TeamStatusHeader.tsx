import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function TeamStatusHeader(props: PropTypes) {
  // Deprecated
  return (
    <View
      style={[
        tailwind('flex-row px-2 py-3 bg-dark-4 border-b border-gray-800'),
      ]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind('font-bold px-2 text-dark-1 font-15')]}>
          Batter
        </Text>
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        {['R', 'B', '4s', '6s', 'S/R'].map(item => {
          return (
            <View
              key={item}
              style={[
                tailwind('flex-col items-center justify-center'),
                {flex: 10 / 5},
              ]}>
              <Text
                style={[tailwind('font-bold text-center text-dark-1 font-12')]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
