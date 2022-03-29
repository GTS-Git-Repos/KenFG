import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  bankname: string;
  dT: boolean;
  last3digits: string;
}

export default function BankInfo(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View style={[{flex: 1.5}]}>
        <Image
          resizeMode="contain"
          source={assets.gpay}
          style={[{width: 32, height: 32}]}
        />
      </View>
      <View style={[{flex: 8}]}>
        <Text
          style={[
            tailwind('font-regular font-15'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          {props.bankname}
        </Text>
        <Text
          style={[
            tailwind('font-regular mt-2 font-15'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          A/C **********{props.last3digits}
        </Text>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  lorder: {
    borderColor: 'rgba(31, 41, 55,0.2)',
    borderWidth: 1,
  },
});
