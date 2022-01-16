import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';

interface PropTypes {
  text: string;
}

export default function secondaryButton(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('rounded py-3 flex-row  items-center justify-center '),
        {
          backgroundColor: '#00513B',
        },
      ]}>
      <Text style={[tailwind('font-bold text-light px-2 font-14')]}>
        {props.text}
      </Text>
    </View>
  );
}
