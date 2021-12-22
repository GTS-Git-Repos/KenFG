import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {} from 'react-native-gesture-handler';
import {Facebook, GoogleIcon} from '../../sharedComponents/';

interface PropTypes {
  text?: string;
}

export default function SocialLogin(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <TouchableOpacity
        style={[
          tailwind(
            'rounded border flex-row items-center justify-center border-gray-600 rounded-3xl p-2',
          ),
          {flex: 4.7},
        ]}>
        <Facebook />
        <Text style={[tailwind('font-bold px-3 text-light font-14')]}>
          Facebook
        </Text>
      </TouchableOpacity>
      <View style={[tailwind(''), {flex: 1}]}></View>

      <TouchableOpacity
        style={[
          tailwind(
            'rounded border flex-row items-center justify-center border-gray-600 rounded-3xl p-2',
          ),
          {flex: 4.5},
        ]}>
        <GoogleIcon />
        <Text style={[tailwind('font-bold px-3 text-light font-14')]}>
          Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
