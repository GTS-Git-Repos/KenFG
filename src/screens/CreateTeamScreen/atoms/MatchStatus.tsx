import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function MatchStatus(props: PropTypes) {
  return (
    <View style={[tailwind('py-2')]}>
      <Text style={[tailwind('font-regular text-center text-primary font-15')]}>
        India elected to field first
      </Text>
    </View>
  );
}
