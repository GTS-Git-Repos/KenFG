/**
 * used in contest info screen
 * jointed contests component
 * match contest status
 * leaderboard profile
 *  */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  code: string;
}

export default function TeamCode(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, !dT && clr.bgGray]}>
      <Text style={[ss.code, !dT && clr.td1]}>{props.code}</Text>
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
