import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import clr from '../../constants/colors';

interface PropTypes {
  dT: boolean;
  onPressMatchType(match_type: number): void;
  isFullMatch: boolean;
}

export default function ContestTypeSwitch(props: PropTypes) {
  return (
    <View style={[props.dT ? ss.dRoot : ss.lRoot]}>
      {props.dT ? (
        <TouchableOpacity
          onPress={() => props.onPressMatchType(1)}
          activeOpacity={0.6}
          style={[ss.option1, props.isFullMatch && ss.dSelOption]}>
          <Text style={[ss.txt, props.isFullMatch ? clr.td1 : clr.tw]}>
            Full Match
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props.onPressMatchType(1)}
          activeOpacity={0.6}
          style={[ss.option1, props.isFullMatch && ss.lSelOption]}>
          <Text style={[ss.txt, props.isFullMatch ? clr.tw : clr.td1]}>
            Full Match
          </Text>
        </TouchableOpacity>
      )}

      {props.dT ? (
        <TouchableOpacity
          onPress={() => props.onPressMatchType(0)}
          activeOpacity={0.6}
          style={[ss.option2, !props.isFullMatch && ss.dSelOption]}>
          <Text style={[ss.txt, props.isFullMatch ? clr.tw : clr.td1]}>
            2nd Innings
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props.onPressMatchType(0)}
          activeOpacity={0.6}
          style={[ss.option2, !props.isFullMatch && ss.lSelOption]}>
          <Text style={[ss.txt, props.isFullMatch ? clr.td1 : clr.tw]}>
            2nd Innings
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const ss = StyleSheet.create({
  dRoot: {
    borderColor: '#C5A858',
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lRoot: {
    borderColor: '#9C181E',
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  option1: {
    borderTopStartRadius: 16,
    borderBottomStartRadius: 16,
    paddingVertical: 4,
    width: 80,
  },
  option2: {
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
    paddingVertical: 4,
    width: 80,
  },
  dSelOption: {
    backgroundColor: '#C5A858',
  },
  lSelOption: {
    backgroundColor: '#9C181E',
  },
  txt: {
    textAlign: 'center',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
  },
});

const styles = StyleSheet.create({
  buttonRoot: {
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  selectedText: {
    color: '#172338',
  },
  dBorder: {
    borderColor: '#C5A858',
    borderWidth: 1,
    borderRadius: 16,
  },

  lBorder: {
    borderColor: '#9C181E',
    borderWidth: 1,
    borderRadius: 16,
  },
  dOption: {
    borderRadius: 16,
    paddingVertical: 4,
    width: 80,
  },
  dselOption: {
    borderColor: '#C5A858',
    backgroundColor: '#C5A858',
    borderWidth: 1,
    borderTopStartRadius: 16,
    borderBottomStartRadius: 16,
    paddingVertical: 4,
    width: 80,
  },
  dselLeftOption: {
    borderColor: '#C5A858',
    backgroundColor: '#C5A858',
    borderWidth: 1,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
    paddingVertical: 4,
    width: 80,
  },
});
