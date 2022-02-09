import React from 'react';
import tailwind from '../../../tailwind';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface PropTypes {
  priceDist: boolean;
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
      <TouchableOpacity
        onPress={() => props.action(props.priceDist)}
        style={[tailwind('flex-row items-center')]}>
        <View
          style={[
            tailwind(
              `rounded-l-xl py-1 ${
                props.priceDist ? 'bg-secondary' : 'bg-dark-3'
              }`,
            ),
            {width: 80},
          ]}>
          <Text
            style={[
              tailwind('font-bold text-center text-white font-13'),
              props.priceDist && styles.selectedText,
            ]}>
            Max
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.action(props.priceDist)}
          style={[
            tailwind(
              `rounded-r-xl  py-1 ${
                !props.priceDist ? 'bg-secondary' : 'bg-dark-3'
              }`,
            ),
            {width: 80},
          ]}>
          <Text
            style={[
              tailwind('font-bold text-center text-white uppercase font-13'),
              !props.priceDist && styles.selectedText,
            ]}>
            Current
          </Text>
        </TouchableOpacity>
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
