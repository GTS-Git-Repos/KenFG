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
    <View style={[tailwind('bg-dark-2 py-4')]}>
      <Text style={[tailwind('font-bold uppercase text-dark-1 px-3 font-15')]}>
        {props.date}
      </Text>
    </View>
  );
}
