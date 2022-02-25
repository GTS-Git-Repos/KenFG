import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
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

  // return <View></View>;

  return (
    <View>
      <View style={[ss.root]}>
        <View style={[ss.logoRoot]}>
          <View
            style={[
              tailwind('w-8 h-10  absolute'),
              {backgroundColor: '#172338'},
            ]}></View>
          <Image
            resizeMode="stretch"
            source={assets.logoWrapper}
            style={[{width: 160, height: 63}]}
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

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoRoot: {
    position: 'relative',
    bottom: 1,
    right: 1.0,
    transform: [{scaleY: 1.3}],
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
