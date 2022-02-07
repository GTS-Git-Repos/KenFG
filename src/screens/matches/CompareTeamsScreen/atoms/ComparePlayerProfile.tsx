import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  name: string;
  role: string;
  points: string;
  team1: boolean;
}

export default function ComparePlayerProfile(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          `px-1 pt-2 border-b border-gray-800 ${
            props.team1 ? 'flex-row-reverse' : 'flex-row'
          } `,
        ),
      ]}>
      <View
        style={[
          tailwind(
            `${
              props.team1
                ? 'flex-row-reverse items-center justify-start'
                : 'flex-row items-center justify-start'
            }`,
          ),
          {flex: 8},
        ]}>
        <View style={[tailwind('')]}>
          <Image
            resizeMode="contain"
            source={assets.player}
            style={[{width: 40, height: 40}]}
          />
        </View>
        <View style={[tailwind('')]}>
          <View style={[tailwind('px-2')]}>
            <Text
              numberOfLines={1}
              style={[tailwind('font-regular text-light font-14')]}>
              {props.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[tailwind('font-regular text-dark-1 font-12 py-1')]}>
              {props.role}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2}]}>
        <View style={[tailwind('rounded px-2 py-1 w-12')]}>
          <Text
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[tailwind('font-bold text-white text-center font-14')]}>
            {props.points}
          </Text>
        </View>
      </View>
    </View>
  );
}
