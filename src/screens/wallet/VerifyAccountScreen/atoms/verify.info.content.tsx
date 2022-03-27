import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function VerifyInfoContent(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgw]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[ss.title, dT ? clr.tgl : clr.td1]}>Get Verified</Text>
        <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>
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

const ss = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 13,
  },
  txt: {
    fontFamily: 'gadugi-normal',
    fontSize: 9,
    paddingTop: 4,
  },
});
