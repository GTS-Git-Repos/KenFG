import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  amount: string;
  setAmount(e: any): any;
  dT: boolean;
}

export default function EnterAmountAddCash(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[tailwind('px-4 py-7'), dT ? clr.bgd2 : clr.bgw]}>
      <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
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
          value={props.amount}
          keyboardType="number-pad"
          keyboardAppearance="dark"
          onChangeText={e => props.setAmount(e)}
          style={[
            tailwind('p-0 px-2 flex-grow font-20 font-bold'),
            dT ? clr.tw : clr.td1,
          ]}
        />
      </View>
      <View style={[tailwind('flex-row items-center pt-1')]}>
        {['1000', '2000', '5000'].map((item: any) => {
          return (
            <TouchableOpacity
              key={item}
              onPress={() => props.setAmount(item)}
              style={[
                dT ? ss.dborder : ss.lborder,
                props.amount === item ? ss.sel : {},
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

const ss = StyleSheet.create({
  dborder: {
    paddingVertical: 4,
    marginRight: 8,
    borderRadius: 20,
    borderColor: 'rgba(31, 41, 55,1)',
    borderWidth: 1,
    flex: 4,
  },
  lborder: {
    paddingVertical: 4,
    marginRight: 8,
    borderRadius: 20,
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderWidth: 1,
    flex: 4,
  },
  sel: {
    borderColor: '#00513B',
  },
});
