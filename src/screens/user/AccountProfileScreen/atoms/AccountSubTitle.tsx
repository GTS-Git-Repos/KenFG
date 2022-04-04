import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  text: string;
  dT: boolean;
}

export default function AccountSubTitle(props: PropTypes) {
  return (
    <View style={[tailwind('px-3 py-1')]}>
      <Text style={[ss.txt, props.dT ? clr.td2 : clr.td1]}>{props.text}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  txt: {
    fontFamily: 'Gadugi-Bold',
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
