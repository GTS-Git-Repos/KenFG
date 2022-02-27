import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import {WalletIcon, LogoWrapper} from '../../../../assets/newIcons';

interface PropTypes {
  amount: string;
  appColors: any;
}

export default function LobbyTopBar(props: PropTypes) {
  const navigation = useNavigation<any>();

  return (
    <View style={[ss.root]}>
      {/* Logo part */}
      <View style={[ss.logoRoot]}>
        <LogoWrapper dark={true} />
        <View style={[tailwind('absolute'), {left: 24}]}>
          <Image
            resizeMode="contain"
            source={assets.logo_new}
            style={[{height: 60, width: 90}]}
          />
        </View>
      </View>
      <View style={[tailwind('justify-end pb-2')]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Wallet')}
          style={[ss.walletWrapper]}>
          <View style={[ss.fac]}>
            <View style={[tailwind('px-2')]}>
              <Text style={[ss.txtbal]}>Cash Balance</Text>
              <Text style={[ss.txtAmount]}>
                {'\u20B9 '}
                {props.amount}
              </Text>
            </View>
            <WalletIcon darkColor={true} outline={false} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoRoot: {
    position: 'relative',
  },
  walletWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    position: 'relative',
    right: 16,
  },
  fac: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtbal: {
    fontFamily: 'gadugi-bold',
    textTransform: 'uppercase',
    fontSize: 11,
    color: '#5F401C',
  },
  txtAmount: {
    color: '#0c1320',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    textAlign: 'right',
  },
});
