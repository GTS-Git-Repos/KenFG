import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';

import {CheckBoxIcon} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  selected: any;
  setSelected(bool: boolean): any;
  dT: boolean;
}

export default function AllowMultipleTeam(props: PropTypes) {
  return (
    <TouchableOpacity
      onPress={() => props.setSelected(!props.selected)}
      style={[tailwind('flex-row items-center justify-between')]}>
      <Text
        style={[
          tailwind('font-regular font-14'),
          props.dT ? clr.td2 : clr.td1,
        ]}>
        Allow Multiple Teams
      </Text>
      <CheckBoxIcon selected={props.selected} />
    </TouchableOpacity>
  );
}
