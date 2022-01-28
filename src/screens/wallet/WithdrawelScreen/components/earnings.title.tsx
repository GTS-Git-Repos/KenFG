import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text: string;
  amount: number;
}

export default function EarningsTitle(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('pt-5 pb-2 px-3 flex-row items-center justify-between'),
      ]}>
      <Text style={[tailwind('font-bold text-white font-14')]}>
        {props.text}
      </Text>
      <Text style={[tailwind('font-bold text-white font-14')]}>
        {'\u20B9 '}
        {props.amount}
      </Text>
    </View>
  );
}
