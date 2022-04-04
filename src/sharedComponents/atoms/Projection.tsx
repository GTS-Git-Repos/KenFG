import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  msg: string;
}

export default function Projection(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return <Text style={[ss.txt, !dT && clr.td1]}>{props.msg}</Text>;
}

const ss = StyleSheet.create({
  txt: {
    fontFamily: 'Gadugi-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 13,
  },
});
