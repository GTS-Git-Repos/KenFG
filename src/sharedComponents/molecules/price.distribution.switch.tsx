import React from 'react';
import tailwind from '../../../tailwind';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface PropTypes {
  action(option: any): any;
}

export default function PriceDistributionSwitch(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between bg-dark-4 px-4 py-3'),
      ]}>
      <Text style={[tailwind('font-bold text-dark-1 uppercase font-13')]}>
        Distribution
      </Text>
      <TouchableOpacity style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('bg-secondary rounded-l-xl py-1'), {width: 80}]}>
          <Text
            style={[
              tailwind('font-bold text-center text-brown-5 font-13'),
              styles.selectedText,
            ]}>
            Max
          </Text>
        </View>
        <View style={[tailwind('rounded-r-xl bg-dark-3 py-1'), {width: 80}]}>
          <Text
            style={[
              tailwind('font-bold text-center text-white uppercase font-13'),
            ]}>
            Current
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedText: {
    color: '#172338',
    textTransform: 'uppercase',
  },
});
