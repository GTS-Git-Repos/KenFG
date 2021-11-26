import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  amount: number;
}

export default function CurrentAmount(props: PropTypes) {
  return (
    <LinearGradient
      colors={['#B2933D', '#bea14f']}
      end={{x: 0.0, y: 1.8}}
      start={{x: 1.6, y: 0.5}}
      locations={[0.6, 0.5]}>
      <View style={[tailwind('py-4 flex-row items-center justify-between')]}>
        <View style={[tailwind('flex-row mx-3 items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.wallet}
            style={[tailwind(''), , {width: 30, height: 30}]}
          />
          <Text
            style={[tailwind('font-bold px-3 uppercase text-brown-5 font-13')]}>
            Current Balance
          </Text>
        </View>

        <Text
          style={[
            tailwind('font-bold px-3 uppercase text-brown-5  font-18 px-4'),
          ]}>
          {'\u20B9'} {props.amount}
        </Text>
      </View>
    </LinearGradient>
  );
}
