import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {WalletIcon} from '../../../../sharedComponents';

interface PropTypes {
  icon: any;
  title: string;
  subTitle: string;
  selected: boolean;
}

export default function FilterLink(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between p-4')]}>
      <View style={[tailwind('flex-row items-center'), {flex: 8}]}>
        {props.icon}
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-white font-15')]}>
            {props.title}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1 font-11')]}>
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
