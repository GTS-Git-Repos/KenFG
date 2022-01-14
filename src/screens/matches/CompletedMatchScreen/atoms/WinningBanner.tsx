import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function WinningBanner(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-between bg-green px-4 py-2'),
      ]}>
      <View>
        <Text style={[tailwind('font-bold text-secondary font-14')]}>
          Congratulations
        </Text>
        <View style={[tailwind('flex-row items-center py-0.5')]}>
          <Text style={[tailwind('font-regular text-white font-15')]}>
            You have won in
          </Text>
          <Text style={[tailwind('font-bold px-1 text-white font-15')]}>2</Text>
          <Text style={[tailwind('font-regular text-white font-15')]}>
            Contest
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-regular text-white font-15')]}>
          {'\u20B9'}
        </Text>
        <Text style={[tailwind('font-bold text-white px-1 font-18')]}>40</Text>
      </View>
    </View>
  );
}
