import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RadioButton} from '../../../../sharedComponents';
import assets from '../../../../constants/assets_manifest';
import {
  BankIcon,
  CreditCardIcon,
  DebitCardIcon,
} from '../../../../assets/newIcons';

interface PropTypes {
  option: number;
  text: string;
  selected: boolean;
  changePayment(paymentOption: number): void;
}

export default function PaymentOptionWallet(props: PropTypes) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.changePayment(props.option)}
        style={[
          tailwind(
            'flex-row items-center justify-between border-b border-gray-800 py-3',
          ),
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          {props.option === 0 && <CreditCardIcon />}
          {props.option === 1 && <DebitCardIcon />}
          {props.option === 2 && <BankIcon />}
          {props.option === 3 && <PaymentImg image={assets.gpay} />}
          {props.option === 4 && <PaymentImg image={assets.phonepe} />}
          {props.option === 5 && <PaymentImg image={assets.paytm} />}
          {props.option === 6 && <PaymentImg image={assets.upi} />}
          <Text style={[tailwind('font-regular pl-2 text-dark-1 font-15')]}>
            {props.text}
          </Text>
        </View>
        <RadioButton selected={props.selected} />
      </TouchableOpacity>
    </View>
  );
}

const PaymentImg = (props: any) => {
  return (
    <Image
      resizeMode="contain"
      source={props.image}
      style={[{width: 24, height: 24}]}
    />
  );
};
