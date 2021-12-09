import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  openSheet(): any;
}

export default function AccountProfileTopBar(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        tailwind('flex-row items-center bg-secondary justify-between p-3'),
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={25} color="#614920" />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.openSheet}>
        <Image
          resizeMode="contain"
          source={assets.vdot}
          style={[tailwind(''), {width: 20, height: 20}]}
        />
      </TouchableOpacity>
    </View>
  );
}
