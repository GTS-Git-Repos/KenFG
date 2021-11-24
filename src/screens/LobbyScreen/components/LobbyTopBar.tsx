import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
interface PropTypes {
  amount: string;
}

export default function LobbyTopBar(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[tailwind('flex-row  justify-between')]}>
        <View style={[tailwind('relative right-1'), {bottom: 7}]}>
          <Image
            resizeMode="cover"
            source={assets.logo_back_rectangle}
            style={[{width: 167, height: 73}]}
          />
        </View>
        <View style={[tailwind('absolute left-2 top-2'), {width: 100}]}>
          <Image
            resizeMode="contain"
            source={assets.logo}
            style={[tailwind('w-full'), {height: 45}]}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('WalletScreen')}
          style={[tailwind('flex-row items-end justify-end px-2')]}>
          <View style={[tailwind('px-2')]}>
            <Text
              style={[
                tailwind('font-bold uppercase'),
                {fontSize: 11, color: '#5F401C'},
              ]}>
              Cash Balance
            </Text>
            <Text style={[tailwind('font-regular text-primary font-16')]}>
              {'\u20B9 '}
              {props.amount}
            </Text>
          </View>
          <Image
            resizeMode="contain"
            source={assets.wallet}
            style={[tailwind(''), {width: 35, height: 33}]}
          />
        </TouchableOpacity>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('mx-4 my-2')]}
        colors={['#C4A858', '#D8BE71', '#BFA14E']}>
        <View style={[tailwind(''), {height: 3}]}></View>
      </LinearGradient>
    </View>
  );
}
