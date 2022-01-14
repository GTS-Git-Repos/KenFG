import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function ProgressBar(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row justify-between bg-dark-2 items-center px-2 py-3'),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind(
              'font-bold py-1 text-dark-1 font-12 px-2 uppercase text-light',
            ),
          ]}>
          Select Match
        </Text>
        <Icon name="checkmark-circle" size={15} color="#006A4D" />
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind(
              'font-bold py-1 text-dark-1 px-2  font-12 uppercase text-light',
            ),
          ]}>
          Join Contest
        </Text>
        <Icon name="checkmark-circle" size={15} color="#006A4D" />
      </View>

      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind(
              'font-bold py-1 text-dark-1 px-2 font-12 uppercase text-light',
            ),
          ]}>
          Create Team
        </Text>
        <Icon name="checkmark-circle" size={15} color="#006A4D" />
      </View>
    </View>
  );
}
