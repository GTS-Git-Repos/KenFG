// used in contest info screen

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  darkModeState: boolean;
  onColorThemePress(option: any): any;
}

export default function ThemeSwitch(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  const sel = props.darkModeState;

  return (
    <View style={[ss.root]}>
      <Text style={[ss.title, dT ? clr.td2 : clr.tdgray]}>App Color Theme</Text>
      <View style={[ss.frc]}>
        {dT ? (
          <>
            <TouchableOpacity
              onPress={() => props.onColorThemePress(sel)}
              style={[ss.sec1, ss.dRoot, sel && ss.dSel]}>
              <Text style={[ss.txt, sel ? clr.tg : clr.tw]}>DARK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onColorThemePress(sel)}
              style={[ss.sec2, ss.dRoot, !sel && ss.dSel]}>
              <Text style={[ss.txt, !sel ? clr.tg : clr.tw]}>LIGHT</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => props.onColorThemePress(sel)}
              style={[ss.sec1, ss.lRoot, sel && ss.lSel]}>
              <Text style={[ss.txt, sel ? clr.tw : clr.td1]}>DARK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onColorThemePress(sel)}
              style={[ss.sec2, ss.lRoot, !sel && ss.lSel]}>
              <Text style={[ss.txt, !sel ? clr.tw : clr.td1]}>LIGHT</Text>
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
    paddingTop: 24,
    paddingBottom: 12,
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
    borderColor: '#C5A858',
    borderWidth: 1,
  },
  lRoot: {
    backgroundColor: '#FFFFFF',
    borderColor: '#9C181E',
    borderWidth: 1,
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
    fontFamily: 'gadugi-normal',
    fontSize: 13,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    textAlign: 'center',
    fontSize: 13,
  },
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
