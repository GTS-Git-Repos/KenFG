import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import {BackIcon} from '../../../../sharedComponents';

interface PropTypes {
  moreOptionSheet: any;
}

export default function AccountProfileTopBar(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        tailwind('flex-row items-center bg-secondary justify-between p-3'),
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.moreOptionSheet?.current?.open()}>
        <Image
          resizeMode="contain"
          source={assets.vdot}
          style={[tailwind(''), {width: 16, height: 16}]}
        />
      </TouchableOpacity>
    </View>
  );
}
