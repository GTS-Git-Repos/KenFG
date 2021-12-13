import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  date: string;
}

export default function Date(props: PropTypes) {
  return (
    <View style={[tailwind(''),{paddingVertical:10,paddingHorizontal:16}]}>
      <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
        {props.date}
      </Text>
    </View>
  );
}
