import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  code: string;
}

export default function TeamCode(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('py-0.5 mx-0.5 bg-dark-4'),
        {borderRadius: 2, paddingHorizontal: 6},
      ]}>
      <Text style={[tailwind('font-regular uppercase text-dark-1 font-12  ')]}>
        {props.code}
      </Text>
    </View>
  );
}
