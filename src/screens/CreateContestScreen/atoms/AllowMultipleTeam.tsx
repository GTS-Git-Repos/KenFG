import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {CheckBoxIcon} from '../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function AllowMultipleTeam(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
        Allow Multiple Teams
      </Text>
      <CheckBoxIcon selected={false} />
    </View>
  );
}
