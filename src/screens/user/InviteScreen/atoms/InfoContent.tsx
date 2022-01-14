import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function InfoContent(props: PropTypes) {
  return (
    <View
      style={[tailwind('bg-dark-3 py-3 flex-row items-center justify-center')]}>
      <View>
        <View style={[tailwind('flex-row items-center pb-3')]}>
          <Image
            resizeMode="contain"
            source={assets.cash_paper}
            style={[tailwind(''), {width: 27, height: 20}]}
          />
          <Text style={[tailwind('font-regular font-14 px-3   text-white')]}>
            Earn cash upto Rs.500 per referral
          </Text>
        </View>

        <View style={[tailwind('flex-row items-center justify-center')]}>
          <Image
            resizeMode="contain"
            source={assets.info_square_light}
            style={[{width: 20, height: 20}]}
          />
          <Text style={[tailwind('font-regular font-14 pl-3 uppercase text-white')]}>
            How it works
          </Text>
        </View>
      </View>
    </View>
  );
}
