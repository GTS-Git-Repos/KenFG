import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  selectText: string;
}

export default function InfoTeamSelection(props: PropTypes) {
  return (
    <View style={[tailwind('p-3 bg-dark-3')]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
        {props.selectText}
      </Text>
    </View>
  );
}
