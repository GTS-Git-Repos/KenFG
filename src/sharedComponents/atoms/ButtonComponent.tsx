import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  text: string;
}

export default function ButtonComponent(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, dT ? clr.bgGreen : clr.bgLgreen]}>
      <Text style={[ss.txt, clr.tw]}>{props.text}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
