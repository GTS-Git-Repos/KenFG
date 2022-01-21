import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TextInput, Text} from 'react-native';
import ApplyBtnAddCash from '../atoms/applybtn.addcash';

interface PropTypes {
  code: string;
  setCode(e: any): any;
}

export default function EnterCouponAddCash(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'flex-row mx-2 p-3 bg-dark-3 mb-2 items-center justify-between rounded',
        ),
      ]}>
      <View style={[tailwind('border-b border-gray-800 mr-3'), {flex: 7}]}>
        <TextInput
          value={props.code}
          onChangeText={(e: any) => props.setCode(e)}
          keyboardType="number-pad"
          keyboardAppearance="dark"
          placeholder="Enter coupon code"
          placeholderTextColor={'#8797B1'}
          style={[tailwind('p-0 px-1 font-14 text-white font-regular')]}
        />
      </View>
      <View style={[tailwind(''), {flex: 3}]}>
        <ApplyBtnAddCash
          action={function () {
            throw new Error('Function not implemented.');
          }}
        />
      </View>
    </View>
  );
}
