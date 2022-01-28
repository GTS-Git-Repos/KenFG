import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  bankname: string;
  last3digits: string;
}

export default function BankInfo(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 1.5}]}>
        <Image
          resizeMode="contain"
          source={assets.gpay}
          style={[{width: 32, height: 32}]}
        />
      </View>
      <View style={[tailwind(''), {flex: 8}]}>
        <Text style={[tailwind('font-regular text-white font-15')]}>
          {props.bankname}
        </Text>
        <Text style={[tailwind('font-regular mt-2 text-dark-1 font-15')]}>
          A/C **********{props.last3digits}
        </Text>
      </View>
    </View>
  );
}
