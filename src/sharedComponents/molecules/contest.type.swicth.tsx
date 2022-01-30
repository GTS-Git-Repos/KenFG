import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface PropTypes {
  onPressMatchType(match_type: number): void;
  isFullMatch: boolean;
}

export default function ContestTypeSwitch(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View
        style={[
          tailwind('flex-row items-center rounded-xl border border-gray-700'),
        ]}>
        <TouchableOpacity
          onPress={() => props.onPressMatchType(1)}
          activeOpacity={0.6}
          style={[
            tailwind(
              `rounded-l-full ${props.isFullMatch ? 'bg-secondary' : ''}`,
            ),
            styles.buttonRoot,
          ]}>
          <Text
            style={[
              tailwind(
                `font-regular text-brown-5 font-12 ${
                  props.isFullMatch ? 'text-brown-5' : 'text-white'
                }`,
              ),
            ]}>
            Full Contests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.onPressMatchType(0)}
          activeOpacity={0.6}
          style={[
            tailwind(
              `${
                !props.isFullMatch
                  ? 'bg-secondary rounded-r-full '
                  : 'rounded-l-full '
              }`,
            ),
            styles.buttonRoot,
          ]}>
          <Text
            style={[
              tailwind(
                `font-regular text-brown-5 font-12 ${
                  !props.isFullMatch ? 'text-brown-5' : 'text-white'
                }`,
              ),
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
});
