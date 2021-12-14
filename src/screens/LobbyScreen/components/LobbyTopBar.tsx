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
  const navigation = useNavigation<any>();
  return (
    <View>
      <View style={[tailwind('flex-row justify-between')]}>
        <View style={[tailwind('relative'), {bottom: 0, right: 1}]}>
          <Image
            resizeMode="cover"
            source={assets.logo_back_rectangle}
            style={[{width: 160, height: 63}]}
          />
        </View>
        <View style={[tailwind('absolute'), {width: 100, left: 20, top: 10}]}>
          <Image
            resizeMode="contain"
            source={assets.logo_new}
            style={[{height: 50, width: '80%'}]}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('WalletScreen')}
          style={[
            tailwind('flex-row items-end justify-end px-2'),
            {position: 'relative', right: 16},
          ]}>
          <View style={[tailwind('px-2')]}>
            <Text
              style={[
                tailwind('font-bold uppercase'),
                {fontSize: 13, color: '#5F401C'},
              ]}>
              Cash Balance
            </Text>
            <Text
              style={[
                tailwind('font-regular text-primary text-right font-16'),
              ]}>
              {'\u20B9 '}
              {/* {props.amount} */} 1,00,000
            </Text>
          </View>
          <Image
            resizeMode="contain"
            source={assets.wallet}
            style={[tailwind(''), {width: 37, height: 37}]}
          />
        </TouchableOpacity>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('mx-4')]}
        colors={['#C4A858', '#D8BE71', '#BFA14E']}>
        <View style={[tailwind(''), {height: 3}]}></View>
      </LinearGradient>
    </View>
  );
}
