import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {DownArrowIcon, RankIcon} from '../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function LeaderProfile(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'px-4 py-3 bg-dark-3 border-b border-gray-700 flex-row items-center justify-between',
        ),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View
          style={[
            tailwind('bg-green rounded-full'),
            {width: 36, height: 36},
          ]}></View>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-regular uppercase text-white font-14')]}>
            Kairo
          </Text>
          <View style={[tailwind('flex-row items-center')]}>
            <Text style={[tailwind('font-regular text-white font-12')]}>
              98678
            </Text>
            <Text
              style={[
                tailwind('font-regular uppercase px-2 text-dark-1 font-12'),
              ]}>
              Points
            </Text>
          </View>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center')]}>
        <RankIcon />
        <Text style={[tailwind('font-regular text-white font-14 pl-1 pr-4')]}>
          10
        </Text>
        <DownArrowIcon />
      </View>
    </View>
  );
}
