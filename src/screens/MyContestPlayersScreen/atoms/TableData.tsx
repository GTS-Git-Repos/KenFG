import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  title: string;
  actual: number;
  points: number;
}

export default function TableData(props: PropTypes) {
  return (
    // <LinearGradient colors={['#0D1320', '#172338']}>
    <View
      style={[
        tailwind('flex-row bg-dark-4 border-b border-gray-800 items-center'),
        {paddingHorizontal: 22},
      ]}>
      <View
        style={[
          tailwind('flex-row items-center justify-start'),
          {flex: 10 / 4},
        ]}>
        <Text
          style={[tailwind('font-regular text-dark-1 uppercase py-2 font-13')]}>
          {props.title}
        </Text>
      </View>
      <View
        style={[
          tailwind('flex-row items-center justify-center'),
          {flex: 10 / 4},
        ]}>
        <Text
          style={[tailwind('font-regular text-light uppercase py-2 font-15')]}>
          {props.actual}
        </Text>
      </View>
      <View
        style={[tailwind('flex-row items-center justify-end'), {flex: 10 / 4}]}>
        <Text
          style={[tailwind('font-regular text-light uppercase py-2 font-15')]}>
          {props.points}
        </Text>
      </View>
    </View>
    // </LinearGradient>
  );
}
