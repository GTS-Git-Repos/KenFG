import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Image,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {CheckBoxIcon} from '../../../sharedComponents';

interface PropTypes {
  selected: any;
  setSelected(bool: boolean): any;
}

export default function AllowMultipleTeam(props: PropTypes) {
  return (
    <TouchableOpacity
      onPress={() => props.setSelected(!props.selected)}
      style={[tailwind('flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
        Allow Multiple Teams
      </Text>
      <CheckBoxIcon selected={props.selected} />
    </TouchableOpacity>
  );
}
