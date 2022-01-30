import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';

interface PropTypes {
  text: string;
}

export default function SubTitle(props: PropTypes) {
  return (
    <View style={[tailwind('m-2')]}>
      <Text style={[tailwind('font-bold text-white font-14')]}>
        {props.text}
      </Text>
    </View>
  );
}
