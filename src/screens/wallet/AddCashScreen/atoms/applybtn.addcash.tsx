import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  action(): any;
  dT: boolean;
}

export default function ApplyBtnAddCash(props: PropTypes) {
  return (
    <View style={[tailwind('border border-gray-700 py-1  rounded-md')]}>
      <Text
        style={[
          tailwind('font-regular font-14 text-center uppercase'),
          props.dT ? clr.tw : clr.td1,
        ]}>
        APPLY
      </Text>
    </View>
  );
}
