import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function PromoNotification(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3')]}>
      <View style={[tailwind('flex-row items-center p-3')]}>
        <View style={[tailwind('bg-black rounded-full'), {width: 40}]}>
          <Image
            resizeMode="contain"
            source={assets.promoNotification}
            style={[tailwind('w-full'), {height: 38, width: 40}]}
          />
        </View>
        <View style={[tailwind('px-3'), {flex: 6.5}]}>
          <View>
            <Text style={[tailwind('font-bold text-light font-12')]}>
              You've got 50% discount in select contests!, Hurry join now!
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 font-12 py-1')]}>
              9 days
            </Text>
          </View>
        </View>
        <View style={[tailwind(''), {flex: 2}]}></View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('')]}
        colors={['#172338', '#8797B1', '#172338']}>
        <View style={[tailwind(''), {height: 1}]}></View>
      </LinearGradient>
    </View>
  );
}
