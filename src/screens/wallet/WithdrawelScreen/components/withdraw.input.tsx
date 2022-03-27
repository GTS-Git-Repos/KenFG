import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SecondaryButton} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  amount: number;
  setAmount(val: number): any;
  dT: boolean;
}

export default function WithDrawInput(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[tailwind('p-4'), dT ? clr.bgd2 : clr.bgw]}>
      <Text style={[tailwind('font-regular font-14'), dT ? clr.tw : clr.td1]}>
        Enter Amount
      </Text>
      <View
        style={[
          tailwind('flex-row items-center my-2 pb-1 border-b border-green'),
        ]}>
        <Text style={[tailwind('font-bold font-20'), {color: '#00513B'}]}>
          {'\u20B9'}
        </Text>
        <TextInput
          value={props.amount.toString()}
          keyboardType="number-pad"
          keyboardAppearance="dark"
          onChangeText={e => props.setAmount(e)}
          style={[
            tailwind('p-0 px-2 flex-grow font-20 font-bold'),
            dT ? clr.tw : clr.td1,
          ]}
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
