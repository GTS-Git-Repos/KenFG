import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function SeriesHeader(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? ss.dbdr : ss.lbdr]}>
      <Text style={[ss.ltxt, dT ? clr.tw : clr.td1]}>TEAM</Text>
      <Text style={[ss.rtxt, dT ? clr.tw : clr.td1]}>RANK</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  dbdr: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#0D1320',
  },
  lbdr: {
    borderColor: 'rgba(31, 41, 55,1)',
    backgroundColor: '#FFFFFF',
  },
  ltxt: {
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    textAlign: 'left',
  },
  rtxt: {
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    textAlign: 'right',
  },
});
