import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

interface PropTypes {
  amount: string;
  setAmount(e: any): any;
}

export default function EnterAmountAddCash(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 px-4 py-7')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
        Enter Amount
      </Text>
      <View
        style={[
          tailwind('flex-row items-center my-2 pb-1 border-b border-green'),
        ]}>
        <Text
          style={[
            tailwind('font-bold text-white font-20'),
            {color: '#00513B'},
          ]}>
          {'\u20B9'}
        </Text>
        <TextInput
          value={props.amount}
          keyboardType="number-pad"
          keyboardAppearance="dark"
          onChangeText={e => props.setAmount(e)}
          style={[tailwind('p-0 px-2 flex-grow font-20 text-white font-bold')]}
        />
      </View>
      <View style={[tailwind('flex-row items-center pt-1')]}>
        {['1000', '2000', '5000'].map((item: any) => {
          return (
            <TouchableOpacity
              key={item}
              onPress={() => props.setAmount(item)}
              style={[
                tailwind(`border mr-2 rounded-2xl py-1
                ${
                  props.amount === item
                    ? 'border-green-500'
                    : ' border-gray-700'
                }
                `),
                {flex: 4},
              ]}>
              <Text
                style={[
                  tailwind('font-regular text-dark-1 text-center font-14'),
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
