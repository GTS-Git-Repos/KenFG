import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BackIcon, WalletIcon} from '../../../../assets/newIcons';
import {useNavigation} from '@react-navigation/native';
import clr from '../../../../constants/colors';

interface PropTypes {
  wallet: string;
  dT: boolean;
}

export default function CreateContestTopBar(props: PropTypes) {
  const navigation = useNavigation();
  const dT = props.dT;
  function goBack() {
    navigation.goBack();
  }

  return (
    // <LinearGradient colors={['#BCA04D', '#D8C872']}>
    <View style={[ss.root, dT ? clr.bgg : clr.bgRed]}>
      <View style={[ss.frc]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon dark={dT} />
        </TouchableOpacity>
        <View style={[tailwind('px-2')]}>
          <Text style={[ss.title, dT ? clr.tg : clr.tw]}>Private Contest</Text>
        </View>
      </View>
      <View>
        <View style={[ss.frc, dT ? ss.dBorder : ss.lBorder]}>
          <Text style={[ss.amount, dT ? clr.tg : clr.tw]}>
            {'\u20B9'} {props.wallet}
          </Text>
          <View style={[ss.walletC, dT ? clr.bgg : clr.bgw]}>
            <WalletIcon darkColor={true} outline={true} />
          </View>
        </View>
      </View>
    </View>
    // </LinearGradient>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },

  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'gadugi-bold',
    paddingHorizontal: 8,
    fontSize: 16,
  },
  amount: {
    fontFamily: 'gadugi-regular',
    paddingHorizontal: 8,
    fontSize: 12,
  },
  dBorder: {
    borderColor: '#C5A858',
    borderRadius: 6,
    borderWidth: 1,
  },
  lBorder: {
    borderColor: '#FFFFFF',
    borderRadius: 6,
    borderWidth: 1,
  },
  walletC: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
