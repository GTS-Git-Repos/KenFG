import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  filterSheet: any;
  text: string;
}

export default function TopConditions(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between px-4 pt-2 pb-1'),
      ]}>
      <Text style={[tailwind('font-regular font-13 text-dark-1')]}>
        {props.text}
      </Text>
      <TouchableOpacity
        onPress={() => props.filterSheet?.current?.open()}
        style={[tailwind('flex-row items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.filter}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
      </TouchableOpacity>
    </View>
  );
}
