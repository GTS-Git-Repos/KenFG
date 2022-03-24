import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import {WalletIcon, LogoWrapper} from '../../../../assets/newIcons';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
interface PropTypes {
  amount: string;
  appColors: any;
}

export default function LobbyTopBar(props: PropTypes) {
  const navigation = useNavigation<any>();
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, dT ? clr.bgg : clr.bgRed]}>
      {/* Logo part */}
      <View style={[ss.logoRoot]}>
        <LogoWrapper dark={dT} />
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
              <Text style={[ss.txtbal, dT ? clr.tg : clr.tw]}>
                Cash Balance
              </Text>
              <Text style={[ss.txtAmount, dT ? clr.td1 : clr.tw]}>
                {'\u20B9 '}
                {props.amount}
              </Text>
            </View>
            <WalletIcon darkColor={dT} outline={false} />
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
    backgroundColor: '#d1b45a',
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
    textShadowColor: '#5F401C',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 0,
  },
  txtAmount: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    textAlign: 'right',
  },
});
