import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import {WalletIcon} from '../../../../assets/newIcons';

interface PropTypes {
  amount: string;
  appColors: any;
}

export default function LobbyTopBar(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <View>
      <View style={[tailwind('flex-row justify-between')]}>
        <View
          style={[
            tailwind('relative'),
            {bottom: 1, right: 1.0, transform: [{scaleY: 1.3}]},
          ]}>
          <View
            style={[
              tailwind('w-8 h-10 absolute'),
              {backgroundColor: '#172338'},
            ]}></View>
          <Image
            resizeMode="stretch"
            source={assets.logoWrapper}
            style={[{width: 160, height: 63, transform: [{rotateZ: '0deg'}]}]}
          />
        </View>
        <View style={[tailwind('absolute'), {width: 100, left: 20, top: 13}]}>
          <Image
            resizeMode="contain"
            source={assets.logo_new}
            style={[{height: 50, width: '80%'}]}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Wallet')}
          style={[
            tailwind('flex-row items-end justify-end px-2'),
            {position: 'relative', right: 16},
          ]}>
          <View style={[tailwind('flex-row items-center')]}>
            <View style={[tailwind('px-2')]}>
              <Text
                style={[
                  tailwind('font-bold uppercase'),
                  {fontSize: 11, color: '#5F401C'},
                ]}>
                Cash Balance
              </Text>
              <Text
                style={[
                  tailwind('font-regular text-primary text-right font-13'),
                ]}>
                {'\u20B9 '}
                {props.amount}
              </Text>
            </View>
            {/* <Image
            resizeMode="contain"
            source={assets.wallet}
            style={[tailwind(''), {width: 28, height: 28, bottom: 3}]}
          /> */}
            <WalletIcon darkColor={true} />
          </View>
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
