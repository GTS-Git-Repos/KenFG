import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from '../../../../sharedComponents';

interface PropTypes {
  text: string;
  selected: boolean;
  changePayment(payment: any): string;
}

export default function PaymentOptionWallet(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center justify-between border-b border-gray-800 py-3',
        ),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
          {props.text}
        </Text>
      </View>
      <TouchableOpacity>
        <RadioButton selected={false} />
      </TouchableOpacity>
    </View>
  );
}
