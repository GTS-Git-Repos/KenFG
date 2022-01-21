import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';

interface PropTypes {
  action(): any;
}

export default function ApplyBtnAddCash(props: PropTypes) {
  return (
    <View style={[tailwind('border border-gray-700 py-1  rounded-md')]}>
      <Text
        style={[
          tailwind('font-regular font-14 text-center text-white uppercase'),
        ]}>
        APPLY
      </Text>
    </View>
  );
}
