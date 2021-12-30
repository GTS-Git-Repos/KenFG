import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  selectedSwitchTab: number;
  switchTab(tab: number): any;
}

export default function Switch(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'bg-dark-3 mx-4 mt-4 mb-2  rounded-lg p-1 flex-row items-center',
        ),
      ]}>
      <TouchableOpacity
        onPress={() => props.switchTab(1)}
        style={[
          tailwind('py-2 rounded-lg'),
          {
            flex: 6,
            backgroundColor:
              props.selectedSwitchTab === 1 ? '#3A2B13' : '#172338',
          },
        ]}>
        <Text
          style={[
            tailwind(
              `font-bold text-center text-white font-14 ${
                props.selectedSwitchTab === 1 ? 'text-white' : 'text-dark-1'
              }`,
            ),
          ]}>
          Create Contest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.switchTab(2)}
        style={[
          tailwind('py-2 rounded-lg'),
          {
            flex: 6,
            backgroundColor:
              props.selectedSwitchTab === 2 ? '#3A2B13' : '#172338',
          },
        ]}>
        <Text
          style={[
            tailwind(
              `font-bold  text-center text-dark-1   font-14 ${
                props.selectedSwitchTab === 2 ? 'text-white' : 'text-dark-1'
              } `,
            ),
          ]}>
          Join Contest
        </Text>
      </TouchableOpacity>
    </View>
  );
}
