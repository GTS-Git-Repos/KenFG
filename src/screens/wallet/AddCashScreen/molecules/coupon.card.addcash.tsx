import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ApplyBtnAddCash from '../atoms/applybtn.addcash';

interface PropTypes {
  text?: string;
}

export default function CouponCardAddCash(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row mx-2 p-3 bg-dark-3 items-center rounded mb-2'),
        {flex: 1},
      ]}>
      <View style={[tailwind('mr-3'), {flex: 7}]}>
        <Text style={[tailwind('font-regular text-white font-14 pb-0.5')]}>
          <Text style={[tailwind('font-bold')]}>KENF20{' '}</Text>
          Get extra 20% cashback upto Rs.200
        </Text>
        <Text style={[tailwind('font-regular  font-11 text-dark-1')]}>
          Min Deposit Rs.500
        </Text>
      </View>
      <TouchableOpacity style={[tailwind(''), {flex: 3}]}>
        <ApplyBtnAddCash
          action={function () {
            throw new Error('Function not implemented.');
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
