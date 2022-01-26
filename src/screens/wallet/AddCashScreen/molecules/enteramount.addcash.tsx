import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';

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
        <TouchableOpacity
          style={[
            tailwind('border border-gray-700 rounded-2xl py-1'),
            {flex: 4},
          ]}>
          <Text
            style={[tailwind('font-regular text-dark-1 text-center font-14')]}>
            100
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tailwind('border border-gray-700 rounded-2xl py-1 mx-2'),
            {flex: 4},
          ]}>
          <Text
            style={[tailwind('font-regular text-dark-1 text-center font-14')]}>
            200
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tailwind('border border-gray-700 rounded-2xl py-1'),
            {flex: 4},
          ]}>
          <Text
            style={[tailwind('font-regular text-dark-1 text-center font-14')]}>
            300
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
