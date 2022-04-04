// used in contest page
import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  title: string;
  subtitle: string;
}

export default function SubtitleContestGroup(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root]}>
      <Text style={[ss.title, !dT && clr.td1]}>{props.title}</Text>
      <Text style={[ss.subTitle, !dT && clr.td1]}>{props.subtitle}</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 17,
    paddingBottom: 4,
    paddingTop: 4,
    color: '#FFFFFF',
  },
  subTitle: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    color: '#8797B1',
  },
});
