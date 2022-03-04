/**
 * used in contest info screen
 * jointed contests component
 * match contest status
 * leaderboard profile
 *  */

import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';

interface PropTypes {
  code: string;
}

export default function TeamCode(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <Text style={[ss.code]}>{props.code}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    backgroundColor: '#0D1320',
    marginHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 2,
    paddingHorizontal: 6,
  },
  code: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});
