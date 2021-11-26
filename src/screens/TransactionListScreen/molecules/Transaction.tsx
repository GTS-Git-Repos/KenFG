import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {BottomLine} from '../../../sharedComponents/';

interface PropTypes {
  amount: string;
  plus: boolean;
  title: string;
}

export default function Transaction(props: PropTypes) {
  return (
    <View style={[tailwind('rounded')]}>
      <View
        style={[
          tailwind(
            'flex-row items-center  bg-dark-3 rounded justify-between px-3 py-4',
          ),
        ]}>
        <Text
          style={[
            tailwind('font-bold font-20'),
            {
              color: props.plus ? '#2ecc71' : '#e74c3c',
              flex: 3,
            },
          ]}>
          {props.plus ? '+' : '-'} {props.amount}
        </Text>

        <Text
          style={[
            tailwind('font-bold text-dark-1 text-center uppercase font-13'),
            {flex: 6},
          ]}>
          {props.title}
        </Text>
        <View
          style={[tailwind('flex-row items-center justify-center'), {flex: 3}]}>
          <Icon name="chevron-down" size={20} color="#7f8c8d" />
        </View>
      </View>
      <BottomLine />
    </View>
  );
}
