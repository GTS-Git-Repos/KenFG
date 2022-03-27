import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import ApplyBtnAddCash from '../atoms/applybtn.addcash';
import clr from '../../../../constants/colors';

interface PropTypes {
  code: string;
  setCode(e: any): any;
  dT: boolean;
}

export default function EnterCouponAddCash(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      <View style={[tailwind('border-b border-gray-800 mr-3'), {flex: 7}]}>
        <TextInput
          value={props.code}
          onChangeText={(e: any) => props.setCode(e)}
          keyboardType="number-pad"
          keyboardAppearance="dark"
          placeholder="Enter coupon code"
          placeholderTextColor={'#8797B1'}
          style={[
            tailwind('p-0 px-1 font-14 font-regular'),
            dT ? clr.tw : clr.td1,
          ]}
        />
      </View>
      <View style={[tailwind(''), {flex: 3}]}>
        <ApplyBtnAddCash action={() => {}} />
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    padding: 12,
    justifyContent: 'space-between',
    borderRadius: 4,
  },
});
