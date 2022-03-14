/**
 * not used anywhere
 */

import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import {BackIcon} from '../../../../assets/newIcons';

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
        <BackIcon dark={true} />
      </TouchableOpacity>
    </View>
  );
}
