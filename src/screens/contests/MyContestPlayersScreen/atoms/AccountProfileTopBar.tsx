import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import {BackIcon} from '../../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function AccountProfileTopBar(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        tailwind('flex-row items-center bg-secondary justify-between p-4'),
      ]}>
      <TouchableOpacity
        style={[tailwind('flex-row items-center')]}
        onPress={() => navigation.goBack()}>
        <BackIcon />
        <Text
          style={[tailwind('font-bold uppercase text-brown-4 px-2 font-15')]}>
          Player Info
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <Image
          resizeMode="contain"
          source={assets.vdot}
          style={[tailwind(''), {width: 20, height: 20}]}
        /> */}
      </TouchableOpacity>
    </View>
  );
}
