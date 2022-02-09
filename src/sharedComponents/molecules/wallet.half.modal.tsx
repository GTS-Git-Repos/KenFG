import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  wallet: string;
  unutilised: string;
  winnings: string;
  bonus: string;
  setShowWalletModal(val: boolean): void;
}

export default function WalletHalfModal(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 p-3')]}>
      <Text style={[tailwind('font-regular text-dark-1 text-center font-15')]}>
        Total Balance
      </Text>
      <Text
        style={[tailwind('font-regular text-white text-center font-18 py-2')]}>
        {'\u20B9'} {props.wallet}
      </Text>
      <WalletSection
        title="Amount Added (UNUTLISED)"
        amount={props.unutilised}
      />
      <WalletSection title="Winnings" amount={props.winnings} />
      <WalletSection title="Cash Bonus" amount={props.bonus} />
      <TouchableOpacity
        style={[tailwind('flex-row pt-2 justify-center')]}
        onPress={() => props.setShowWalletModal(false)}>
        <Icon name="chevron-up-outline" size={20} color="grey" />
      </TouchableOpacity>
    </View>
  );
}

const WalletSection = (props: any) => {
  return (
    <View style={[tailwind('border-t border-b border-gray-800 py-2')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
        {props.title}
      </Text>
      <Text style={[tailwind('font-regular text-white font-14 py-2')]}>
        {'\u20B9'} {props.amount}
      </Text>
    </View>
  );
};
