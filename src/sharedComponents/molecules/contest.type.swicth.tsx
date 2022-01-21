import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';

interface PropTypes {
  si: boolean;
  action(): any;
}

export default function ContestTypeSwitch(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View
        style={[
          tailwind('flex-row items-center rounded-xl border border-gray-700'),
        ]}>
        <TouchableOpacity
          style={[
            tailwind('bg-secondary  rounded-l-full  '),
            styles.buttonRoot,
          ]}>
          <Text style={[tailwind('font-regular text-brown-5 font-12')]}>
            Full Contests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tailwind('rounded-r-full'), styles.buttonRoot]}>
          <Text style={[tailwind('font-regular text-white font-12')]}>
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
