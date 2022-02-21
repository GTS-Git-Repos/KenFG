import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface PropTypes {
  onPressMatchType(match_type: number): void;
  isFullMatch: boolean;
}

export default function ContestTypeSwitch(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between bg-dark-4'),
        styles.dBorder,
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity
          onPress={() => props.onPressMatchType(1)}
          activeOpacity={0.6}
          style={[props.isFullMatch ? styles.dselOption : styles.dOption]}>
          <Text
            style={[
              tailwind('font-regular text-center text-white font-12'),
              props.isFullMatch && styles.selectedText,
            ]}>
            Full Contests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.onPressMatchType(0)}
          style={[!props.isFullMatch ? styles.dselLeftOption : styles.dOption]}>
          <Text
            style={[
              tailwind('font-regular text-center text-white font-12'),
              !props.isFullMatch && styles.selectedText,
            ]}>
            2nd Innings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    // backgroundColor: '#172338',
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
