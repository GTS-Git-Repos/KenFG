import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {CloneIcon} from '../../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function ShareWebLink(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'border border-gray-700 rounded p-4 flex-row items-center justify-between ',
        ),
      ]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
        kenfg.in/invite/345356734
      </Text>
      <CloneIcon />
    </View>
  );
}
