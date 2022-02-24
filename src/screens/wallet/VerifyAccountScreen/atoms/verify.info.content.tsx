import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';

export default function VerifyInfoContent() {
  return (
    <View style={[tailwind('bg-dark-3 px-4 py-3 mb-2 flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind('font-bold font-13 text-secondary')]}>
          Get Verified
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-11 pt-1')]}>
          Withdraw winnings to your bank account instantly !
        </Text>
      </View>
      <View style={[tailwind('flex-row justify-end'), {flex: 4}]}>
        <Image
          resizeMode="contain"
          source={assets.verify_account}
          style={[tailwind(''), {width: 81, height: 59}]}
        />
      </View>
    </View>
  );
}
