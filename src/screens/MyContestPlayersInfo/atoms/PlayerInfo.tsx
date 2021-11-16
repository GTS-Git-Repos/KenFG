import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import assets from '../../../constants/assets_manifest';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  selected_by: string;
  credits: string;
  points: string;
}

export default function PlayerInfo(props: PropTypes) {
  return (
    <View style={[tailwind('px-2 pt-2 flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 3}]}>
        <Image
          resizeMode="contain"
          source={assets.playerImage}
          style={{width: '100%', height: 80}}
        />
      </View>
      <View style={[tailwind('flex-row'), {flex: 7}]}>
        <View style={[tailwind('flex-col justify-between p-1'), {flex: 5}]}>
          <Text
            allowFontScaling={true}
            style={[tailwind('font-regular text-light font-11 py-1')]}>
            SELECTED BY
          </Text>
          <Text style={[tailwind('font-bold text-light font-17')]}>
            {props.selected_by}
          </Text>
        </View>
        <View style={[tailwind('flex-col justify-between p-1'), {flex: 4}]}>
          <Text style={[tailwind('font-regular text-light font-11 py-1')]}>
            CREDITS
          </Text>
          <Text style={[tailwind('font-bold text-light font-17')]}>
            {props.credits}
          </Text>
        </View>
        <View style={[tailwind('flex-col justify-between p-1'), {flex: 4}]}>
          <Text style={[tailwind('font-regular text-light font-11 py-1')]}>
            POINTS
          </Text>
          <Text style={[tailwind('font-bold text-light font-17')]}>
            {props.points}
          </Text>
        </View>
      </View>
    </View>
  );
}
