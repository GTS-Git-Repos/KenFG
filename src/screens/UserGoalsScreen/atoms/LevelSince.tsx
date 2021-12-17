import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function LevelSince(props: PropTypes) {
  return (
    <View
      style={[tailwind('bg-dark-3 mx-2 rounded p-3 flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 4}]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Text
            style={[tailwind('font-regular text-dark-1 font-11'), {flex: 8}]}>
            Levels Crossed:
          </Text>
          <Text
            style={[
              tailwind('font-regular text-white text-light font-11'),
              {flex: 2},
            ]}>
            1-42
          </Text>
        </View>

        <View style={[tailwind('flex-row py-1 items-center')]}>
          <Text
            style={[tailwind('font-regular text-dark-1 font-11'), {flex: 6}]}>
            Playing Since:
          </Text>
          <Text
            style={[
              tailwind('font-regular text-white text-right font-11'),
              {flex: 6},
            ]}>
            2/3/2021
          </Text>
        </View>
      </View>

      <View
        style={[tailwind('bg-dark-1 mx-2'), {width: 1, height: '100%'}]}></View>

      <View style={[tailwind(''), {flex: 4}]}>
        <View style={[tailwind('')]}>
          <Text
            style={[
              tailwind(
                'font-regular text-secondary text-right  uppercase font-10',
              ),
            ]}>
            Total Cash Bonus Earned
          </Text>
          <Text
            style={[
              tailwind('font-regular py-0.5 text-right text-white font-20'),
            ]}>
            {'\u20B9'} 5,342
          </Text>
        </View>
      </View>
    </View>
  );
}
