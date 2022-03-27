import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  text: string;
  dT: boolean;
}

export default function SubTitleAddCash(props: PropTypes) {
  return (
    <View style={[tailwind('pt-5 pb-2 px-5')]}>
      <Text
        style={[tailwind('font-bold  font-14'), props.dT ? clr.tw : clr.td1]}>
        {props.text}
      </Text>
    </View>
  );
}
