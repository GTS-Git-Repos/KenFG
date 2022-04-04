// used in contest info screen

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  priceDist: boolean;
  action(option: any): any;
}

export default function PriceDistributionSwitch(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  const sel = props.priceDist;

  return (
    <View style={[ss.root]}>
      <Text style={[ss.title, dT ? clr.td2 : clr.tdgray]}>Distribution</Text>
      <View style={[ss.frc]}>
        {dT ? (
          <>
            <TouchableOpacity
              onPress={() => props.action(sel)}
              style={[ss.sec1, ss.dRoot, sel && ss.dSel]}>
              <Text style={[ss.txt, sel ? clr.tg : clr.tw]}>Max</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.action(sel)}
              style={[ss.sec2, ss.dRoot, !sel && ss.dSel]}>
              <Text style={[ss.txt, !sel ? clr.tg : clr.tw]}>Current</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => props.action(sel)}
              style={[ss.sec1, ss.lRoot, sel && ss.lSel]}>
              <Text style={[ss.txt, sel ? clr.tw : clr.td1]}>Max</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.action(sel)}
              style={[ss.sec2, ss.lRoot, !sel && ss.lSel]}>
              <Text style={[ss.txt, !sel ? clr.tw : clr.td1]}>Current</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sec1: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    width: 80,
    paddingVertical: 4,
  },
  sec2: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    width: 80,
    paddingVertical: 4,
  },
  dRoot: {
    backgroundColor: '#172338',
  },
  lRoot: {
    backgroundColor: '#FFFFFF',
  },

  dSel: {
    backgroundColor: '#C5A858',
  },
  lSel: {
    backgroundColor: '#9C181E',
  },
  selectedText: {
    color: '#172338',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Gadugi-Bold',
    textTransform: 'uppercase',
    fontSize: 13,
  },
  txt: {
    fontFamily: 'Gadugi-Bold',
    textAlign: 'center',
    fontSize: 13,
  },
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
