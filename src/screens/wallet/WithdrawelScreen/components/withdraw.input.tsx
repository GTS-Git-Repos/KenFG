import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SecondaryButton} from '../../../../sharedComponents';

interface PropTypes {
  amount: number;
  setAmount(val: number): any;
}

export default function WithDrawInput(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 p-4')]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
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
          value={props.amount.toString()}
          keyboardType="number-pad"
          keyboardAppearance="dark"
          onChangeText={e => props.setAmount(e)}
          style={[tailwind('p-0 px-2 flex-grow font-20 text-white font-bold')]}
        />
      </View>
      <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
        min Rs.50 & max Rs.1,00,000 allowed per day
      </Text>
      <TouchableOpacity style={[tailwind('mt-4')]}>
        <SecondaryButton text={'MOVE TO WALLET NOW'} />
      </TouchableOpacity>
    </View>
  );
}
