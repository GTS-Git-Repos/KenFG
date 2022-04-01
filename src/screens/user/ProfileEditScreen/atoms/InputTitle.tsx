import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import clr from '../../../../constants/colors';
import {AppThemeType} from '../../../../types/app';

interface PropTypes {
  text: string;
  tm: AppThemeType;
}

export default function InputTitle(props: PropTypes) {
  return (
    <View style={[tailwind('pt-4 pb-2')]}>
      <Text style={[tailwind('font-regular font-12'), props.tm.txt]}>
        {props.text}
      </Text>
    </View>
  );
}
