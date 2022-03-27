import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ApplyBtnAddCash from '../atoms/applybtn.addcash';
import clr from '../../../../constants/colors';

interface PropTypes {
  text?: string;
  dT: boolean;
}

export default function CouponCardAddCash(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      <View style={[tailwind('mr-3'), {flex: 7}]}>
        <Text
          style={[
            tailwind('font-regular font-14 pb-0.5'),
            dT ? clr.tw : clr.td1,
          ]}>
          <Text style={[tailwind('font-bold'), dT ? clr.tw : clr.td1]}>
            KENF20{' '}
          </Text>
          Get extra 20% cashback upto Rs.200
        </Text>
        <Text style={[tailwind('font-regular  font-11 text-dark-1')]}>
          Min Deposit Rs.500
        </Text>
      </View>
      <TouchableOpacity style={[tailwind(''), {flex: 3}]}>
        <ApplyBtnAddCash dT={dT} action={() => {}} />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    padding: 12,
    marginBottom: 8,
    flex: 1,
  },
});
