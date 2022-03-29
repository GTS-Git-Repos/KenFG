import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  updatedAt: string;
  enableCompareState(): any;
  dT: boolean;
}

export default function LastUpdatedAt(props: PropTypes) {
  const dT = props.dT;
  return (
    <View
      style={[
        tailwind('mt-3 py-3 flex-row items-center justify-between'),
        dT ? clr.bgd2 : clr.bgw,
      ]}>
      <Text
        style={[
          tailwind('font-regular pl-3 font-11'),
          {letterSpacing: 0.5},
          dT ? clr.tw : clr.td1,
        ]}>
        Points last updated at {props.updatedAt} overs
      </Text>
      <View style={[tailwind('flex-row px-2 items-center')]}>
        {/* <View style={[tailwind('px-1')]}>
          <Image
            resizeMode="contain"
            source={assets.comparePlayer}
            style={[tailwind('app-w-20 app-h-20')]}
          />
        </View> */}
        <TouchableOpacity
          onPress={() => props.enableCompareState()}
          style={[tailwind('pr-1')]}>
          <Image
            resizeMode="contain"
            source={assets.vs}
            style={[tailwind('app-w-18 app-h-18')]}
          />
        </TouchableOpacity>

        <View style={[tailwind('pl-1')]}>
          <Image
            resizeMode="contain"
            source={assets.download}
            style={[tailwind('app-w-18 app-h-18')]}
          />
        </View>
      </View>
    </View>
  );
}
