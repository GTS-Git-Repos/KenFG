// used in full and 2 nd contests screen,

import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {appTheme} from '../../store/selectors/app.selector';
import {useSelector} from 'react-redux';
import SecondaryButton from '../atoms/secondaryButton';

interface PropTypes {
  wallet: string;
  unutilised: string;
  winnings: string;
  bonus: string;
  setShowWalletModal(val: boolean): void;
}

export default function WalletHalfModal(props: PropTypes) {
  const tm = useSelector(appTheme);

  return (
    <View style={[tailwind('p-3'), tm.bg2]}>
      <Text style={[tailwind('font-regular text-center font-15'), tm.txt]}>
        Total Balance
      </Text>
      <Text
        style={[tailwind('font-regular text-center font-18 py-2'), tm.txt2]}>
        {'\u20B9'} {props.wallet}
      </Text>

      <WalletSection
        title="Amount Added (UNUTLISED)"
        amount={props.unutilised}
        tm={tm}
      />
      <WalletSection tm={tm} title="Winnings" amount={props.winnings} />
      <WalletSection tm={tm} title="Cash Bonus" amount={props.bonus} />
      {/* <TouchableOpacity>
        <SecondaryButton text={'Add Money'} />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={[tailwind('flex-row pt-2 justify-center')]}
        onPress={() => props.setShowWalletModal(false)}>
        <Icon name="close-outline" size={20} color="grey" />
      </TouchableOpacity>
    </View>
  );
}

const WalletSection = (props: any) => {
  return (
    <View style={[tailwind('py-2')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
        {props.title}
      </Text>
      <Text style={[tailwind('font-regular font-14 py-2'), props.tm.txt2]}>
        {'\u20B9'} {props.amount}
      </Text>
    </View>
  );
};

const ss = StyleSheet.create({
  dBorder: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
  },
  lBorder: {
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
  },
});
