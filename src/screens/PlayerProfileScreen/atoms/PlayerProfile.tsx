import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamName: string;
  points: string;
  credit: string;
}

export default function PlayerProfile(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 3}]}>
        <Image
          resizeMode="contain"
          source={assets.playerImage}
          style={{width: 80, height: 80}}
        />
        <View
          style={[
            tailwind('absolute bg-gray-200 bottom-1 left-1'),
            {padding: 2, borderRadius: 2},
          ]}>
          <Text
            style={[tailwind('font-regular text-primary uppercase font-11')]}>
            {props.teamName}
          </Text>
        </View>
      </View>
      <View style={[tailwind('flex-row'), {flex: 7}]}>
        <View style={[tailwind('flex-col p-4')]}>
          <Text style={[tailwind('font-regular text-light font-15')]}>
            Points
          </Text>
          <Text style={[tailwind('font-bold text-light py-1 font-20')]}>
            {props.points}
          </Text>
        </View>
        <View style={[tailwind('flex-col p-4')]}>
          <Text style={[tailwind('font-regular text-light font-15')]}>
            Credits
          </Text>
          <Text style={[tailwind('font-bold text-light py-1 font-20')]}>
            {props.credit}
          </Text>
        </View>
      </View>
    </View>
  );
}
