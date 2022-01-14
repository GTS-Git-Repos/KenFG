import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text: string;
}

export default function SubTitle(props: PropTypes) {
  return (
    <View style={[tailwind('px-4 py-3')]}>
      <Text style={[tailwind('font-bold text-dark-1 uppercase font-12')]}>
        {props.text}
      </Text>
    </View>
  );
}
