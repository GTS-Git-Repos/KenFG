/**
 * Ken FG Experts link, disabled for now, needed in future update
 */

import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function ExpertStats(props: PropTypes) {
  return (
    <View style={[tailwind('pt-3 flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
        For expert comment & stats
      </Text>
      <Button />
    </View>
  );
}

const Button = () => {
  return (
    <View
      style={[
        tailwind(
          'bg-green rounded-full flex-row items-center justify-center px-2 py-0.5',
        ),
        {opacity: 0.7},
      ]}>
      <Text
        style={[
          tailwind('font-regular text-white px-1 font-11'),
          {opacity: 0.7},
        ]}>
        Open in KFG
      </Text>
      <Icon name="arrow-forward" color="lightgray" size={14} />
    </View>
  );
};
