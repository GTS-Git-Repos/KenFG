import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  updatedAt: string;
}

export default function LastUpdatedAt(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'bg-dark-3 mt-2 px-4 py-3 flex-row items-center justify-between',
        ),
      ]}>
      <Text
        style={[
          tailwind('font-regular text-light font-11'),
          {letterSpacing: 0.5},
        ]}>
        Points last updated at {props.updatedAt} overs
      </Text>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('px-1')]}>
          <Image
            resizeMode="contain"
            source={assets.comparePlayer}
            style={[tailwind('app-w-20 app-h-20')]}
          />
        </View>
        <View style={[tailwind('px-1')]}>
          <Image
            resizeMode="contain"
            source={assets.vs}
            style={[tailwind('app-w-20 app-h-20')]}
          />
        </View>

        <View style={[tailwind('px-1')]}>
          <Image
            resizeMode="contain"
            source={assets.download}
            style={[tailwind('app-w-20 app-h-20')]}
          />
        </View>
      </View>
    </View>
  );
}
