import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, useWindowDimensions, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function TeamsMyMatchCard(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View
      style={[
        tailwind('flex-row items-center items-center justify-between py-2'),
      ]}>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('bg-blue-800 h-5 w-3')]}></View>
          <Image
            resizeMode="contain"
            source={assets.australia_flag}
            style={[tailwind(''), {width: 50, height: 50}]}
          />
        </View>
        <Text
          style={[tailwind('font-regular font-12 text-gray-400 text-center')]}>
          AUS
        </Text>
      </View>

      <View style={[tailwind('flex flex-row items-center')]}>
        <Icon name="timer" color="white" size={16} />
        <Text style={[tailwind('font-bold text-white px-1 mb-1')]}>
          2h:23:32
        </Text>
      </View>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.south_africa_flag}
            style={[tailwind(''), {width: 50, height: 50}]}
          />
          <View style={[tailwind('bg-green-800 h-5 w-3')]}></View>
        </View>
        <Text
          style={[tailwind('font-regular font-12 text-gray-400 text-center')]}>
          AUS
        </Text>
      </View>
    </View>
  );
}
