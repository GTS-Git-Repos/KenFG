import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  text: string;
  amount: number;
  dT: boolean;
}

export default function EarningsTitle(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('pt-5 pb-2 px-3 flex-row items-center justify-between'),
      ]}>
      <Text style={[ss.txt, props.dT ? clr.tw : clr.td1]}>{props.text}</Text>
      <Text style={[ss.txt, props.dT ? clr.tw : clr.td1]}>
        {'\u20B9 '}
        {props.amount}
      </Text>
    </View>
  );
}

const ss = StyleSheet.create({
  txt: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 14,
  },
});
