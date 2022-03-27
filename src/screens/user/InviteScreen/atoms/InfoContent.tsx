import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {InfoIcon} from '../../../../assets/newIcons';
import clr from '../../../../constants/colors';

interface PropTypes {
  text?: string;
  dT: boolean;
}

export default function InfoContent(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('py-3 flex-row items-center justify-center'),
        props.dT ? clr.bgd1 : clr.bgw,
      ]}>
      <View>
        <View style={[tailwind('flex-row items-center pb-3')]}>
          <Image
            resizeMode="contain"
            source={assets.cash_paper}
            style={[tailwind(''), {width: 27, height: 20}]}
          />
          <Text
            style={[
              tailwind('font-regular font-14 px-3'),
              props.dT ? clr.tw : clr.td1,
            ]}>
            Earn cash upto Rs.500 per referral
          </Text>
        </View>

        <View style={[tailwind('flex-row items-center justify-center')]}>
          <InfoIcon isDarkMode={props.dT} />
          <Text
            style={[
              tailwind('font-regular font-14 pl-3 uppercase'),
              props.dT ? clr.tw : clr.td1,
            ]}>
            How it works
          </Text>
        </View>
      </View>
    </View>
  );
}
