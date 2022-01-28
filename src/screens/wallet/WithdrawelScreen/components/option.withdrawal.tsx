import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import {RadioButton} from '../../../../sharedComponents';

interface PropTypes {
  text: string;
  isSelected: boolean;
}

export default function OptionEarnings(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-regular text-white font-15')]}>
        {props.text}
      </Text>
      <RadioButton selected={props.isSelected} />
    </View>
  );
}
