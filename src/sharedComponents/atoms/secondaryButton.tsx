import React from 'react';
import tailwind from '../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  text: string;
}

export default function secondaryButton(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, dT ? clr.bgGreen : clr.bgLgreen]}>
      <Text style={[ss.txt]}>{props.text}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    borderRadius: 5,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
