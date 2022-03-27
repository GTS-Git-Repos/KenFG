import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import clr from '../../../../constants/colors';
import {RadioButton} from '../../../../sharedComponents';

interface PropTypes {
  text: string;
  isSelected: boolean;
  dT: boolean;
}

export default function OptionEarnings(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <Text
        style={[tailwind('font-regular font-15'), props.dT ? clr.tw : clr.td1]}>
        {props.text}
      </Text>
      <RadioButton selected={props.isSelected} />
    </View>
  );
}
