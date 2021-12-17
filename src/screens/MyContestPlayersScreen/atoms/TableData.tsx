import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  title: string;
  actual: number;
  points: number;
}

export default function TableData(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center bg-dark-2'),
        {paddingHorizontal: 22},
      ]}>
      <View
        style={[
          tailwind('flex-row items-center justify-start'),
          {flex: 10 / 4},
        ]}>
        <Text
          style={[tailwind('font-regular text-dark-1 uppercase py-2 font-16')]}>
          {props.title}
        </Text>
      </View>
      <View
        style={[
          tailwind('flex-row items-center justify-center'),
          {flex: 10 / 4},
        ]}>
        <Text
          style={[tailwind('font-regular text-light uppercase py-2 font-16')]}>
          {props.actual}
        </Text>
      </View>
      <View
        style={[tailwind('flex-row items-center justify-end'), {flex: 10 / 4}]}>
        <Text
          style={[tailwind('font-regular text-light uppercase py-2 font-16')]}>
          {props.points}
        </Text>
      </View>
    </View>
  );
}
