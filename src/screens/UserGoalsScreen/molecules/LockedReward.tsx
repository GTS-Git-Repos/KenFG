import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function LockedReward(props: PropTypes) {
  return (
    <LinearGradient
      colors={['#0D1320', '#172338']}
      style={[tailwind('px-3 pt-3 pb-2 bg-dark-3 rounded mx-2 mb-2')]}>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <View
          style={[tailwind('flex-row items-center bg-dark-4 p-0.5 rounded')]}>
          <Text style={[tailwind('font-regular text-secondary font-11')]}>
            Level 100
          </Text>
          <Text style={[tailwind('font-regular text-white px-2 font-11')]}>
            Annual Surprise
          </Text>
        </View>
        <TouchableOpacity
          style={[
            tailwind('bg-secondary rounded p-0.5 flex-row items-center'),
          ]}>
          <Text style={[tailwind('font-regular text-brown-5 px-0.5 font-10')]}>
            Unlocked
          </Text>
          <Icon name="lock-open-outline" size={13} color="#3A2B13" />
        </TouchableOpacity>
      </View>

      <Text
        style={[
          tailwind('font-regular text-dark-1 pt-2 pb-1 font-11 text-center'),
        ]}>
        Unlock a special gift from us a celebrate you
      </Text>
    </LinearGradient>
  );
}
