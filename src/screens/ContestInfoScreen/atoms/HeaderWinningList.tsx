import React from 'react';
import tailwind from '../../../../tailwind';
import {View, TouchableOpacity, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function HeaderWinningsList(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between bg-dark-4 px-4 py-3'),
      ]}>
      <Text style={[tailwind('font-bold text-dark-1 uppercase font-13')]}>
        Distribution
      </Text>
      <TouchableOpacity
        style={[
          tailwind('flex-row items-center border border-gray-800 rounded'),
        ]}>
        <View style={[tailwind('bg-secondary rounded-l  py-0.5'), {width: 70}]}>
          <Text
            style={[tailwind('font-regular text-center text-brown-5 font-15')]}>
            Max
          </Text>
        </View>
        <View style={[tailwind('rounded py-0.5'), {width: 70}]}>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-15')]}>
            Current
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
