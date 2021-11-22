import React from 'react';
import tailwind from '../../../../tailwind';
import {BottomLine} from '../../../sharedComponents';
import {View, Image, Text} from 'react-native';
import assets from '../../../constants/assets_manifest';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function Points(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <Text
        style={[
          tailwind('font-regular pt-1 pb-2 text-center text-dark-1 font-14'),
        ]}>
        Total Points
      </Text>
      <View style={[tailwind('mx-24')]}>
        <BottomLine />
      </View>
      <View style={[tailwind('flex-row justify-center py-2 items-center')]}>
        <View style={[tailwind(''), {flex: 10 / 3}]}>
          <Text
            style={[
              tailwind('font-bold text-right text-light'),
              {fontSize: 26},
            ]}>
            384.4
          </Text>
        </View>
        <View style={[tailwind('flex-row justify-center'), {flex: 1}]}>
          <Image
            resizeMode="contain"
            source={assets.flash}
            style={[tailwind('px-4'), {width: 15, height: 24}]}
          />
        </View>

        <View style={[tailwind(''), {flex: 10 / 3}]}>
          <Text
            style={[
              tailwind('font-bold text-left text-light'),
              {fontSize: 26},
            ]}>
            499
          </Text>
        </View>
      </View>
      <View style={[tailwind('mx-12')]}>
        <BottomLine />
      </View>
    </View>
  );
}
