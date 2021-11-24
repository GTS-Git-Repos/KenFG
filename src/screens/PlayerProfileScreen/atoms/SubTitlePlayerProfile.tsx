import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';

interface PropTypes {
  text: string;
}

export default function SubTitlePlayerProfile(props: PropTypes) {
  return (
    <View style={[tailwind('px-4 py-3')]}>
      <Text style={[tailwind('font-bold  text-light font-16')]}>
        {props.text}
      </Text>
    </View>
  );
}
