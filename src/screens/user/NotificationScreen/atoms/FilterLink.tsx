import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  icon: any;
  title: string;
  subTitle: string;
  selected: boolean;
  dT: boolean;
}

export default function FilterLink(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[tailwind('flex-row items-center justify-between p-4')]}>
      <View style={[tailwind('flex-row items-center'), {flex: 8}]}>
        {props.icon}
        <View style={[tailwind('px-2')]}>
          <Text style={[ss.title, dT ? clr.tw : clr.td1]}>{props.title}</Text>
          <Text style={[ss.subtxt, dT ? clr.td2 : clr.tdgray]}>
            {props.subTitle}
          </Text>
        </View>
      </View>

      <View style={[tailwind(' items-end'), {flex: 2}]}>
        {props.selected ? (
          <Icon name="checkmark-circle-outline" size={20} color="green" />
        ) : (
          <Icon name="ellipse-outline" size={20} color="gray" />
        )}
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 15,
  },
  subtxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
  },
});
