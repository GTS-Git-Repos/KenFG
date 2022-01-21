import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text: string;
}

export default function SubTitleAddCash(props: PropTypes) {
  return (
    <View style={[tailwind('pt-5 pb-2 px-5')]}>
      <Text style={[tailwind('font-bold text-white font-14')]}>
        {props.text}
      </Text>
    </View>
  );
}
