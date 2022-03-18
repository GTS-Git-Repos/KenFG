import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface PropTypes {
  msg: string;
}

export default function Projection(props: PropTypes) {
  return <Text style={[ss.txt]}>{props.msg}</Text>;
}

const ss = StyleSheet.create({
  txt: {
    fontFamily: 'gadugi-bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 13,
  },
});
