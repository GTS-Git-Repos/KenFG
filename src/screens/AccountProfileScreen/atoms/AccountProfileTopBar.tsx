import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function AccountProfileTopBar(props: PropTypes) {
  return (
    
    <View
      style={[
        tailwind('flex-row items-center bg-secondary justify-between p-3'),
      ]}>
      <TouchableOpacity>
        <Icon name="chevron-back-outline" size={25} color="#614920" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={assets.vdot}
          style={[tailwind(''), {width: 20, height: 20}]}
        />
      </TouchableOpacity>
    </View>
  );
}
