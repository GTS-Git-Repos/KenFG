import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text: string;
}

export default function WalletSubTitle(props: PropTypes) {
  return (
    <View style={[tailwind('pt-2  px-4')]}>
      <Text style={[tailwind('font-regular uppercase text-dark-1 font-13')]}>
        {props.text}
      </Text>
    </View>
  );
}
