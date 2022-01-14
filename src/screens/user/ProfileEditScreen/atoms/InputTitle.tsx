import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text: string;
}

export default function InputTitle(props: PropTypes) {
  return (
    <View style={[tailwind('pt-4')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
        {props.text}
      </Text>
    </View>
  );
}
