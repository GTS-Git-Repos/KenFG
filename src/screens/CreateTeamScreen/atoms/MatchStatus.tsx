import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text: string;
}

export default function MatchStatus(props: PropTypes) {
  return (
    <View style={[tailwind('py-3')]}>
      <Text
        style={[
          tailwind('font-bold text-center text-dark-1 font-12'),
          {letterSpacing: 0.5},
        ]}>
        {props.text}
      </Text>
    </View>
  );
}
