import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  text: string;
  dT: boolean;
}

export default function InputTitle(props: PropTypes) {
  return (
    <View style={[tailwind('pt-4 pb-2')]}>
      <Text
        style={[
          tailwind('font-regular font-12'),
          props.dT ? clr.td2 : clr.td2,
        ]}>
        {props.text}
      </Text>
    </View>
  );
}
