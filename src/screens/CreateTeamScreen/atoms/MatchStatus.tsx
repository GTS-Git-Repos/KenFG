import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function MatchStatus(props: PropTypes) {
  return (
    <View style={[tailwind('py-3')]}>
      <Text
        style={[
          tailwind('font-regular text-center text-primary'),
          {fontSize: 14, letterSpacing: 0.4},
        ]}>
        India elected to field first
      </Text>
    </View>
  );
}
