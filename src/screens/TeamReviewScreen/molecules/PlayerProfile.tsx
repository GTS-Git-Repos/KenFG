import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  image?: string;
  name: string;
  points: string;
  teamname: string;
  title: string;
  c: string;
  vc: string;
}

export default function PlayerProfile(props: PropTypes) {
  return (
    <View
      style={[tailwind('pt-3 flex-row items-center border-b border-gray-600')]}>
      <View style={[tailwind('flex-row'), {flex: 5}]}>
        <Image
          resizeMode="contain"
          source={assets.playerImage}
          style={{width: 75, height: 75}}
        />
        <Icon
          style={[tailwind('absolute mx-1')]}
          name="information-circle-outline"
          color="white"
          size={20}
        />
        <View
          style={[tailwind('absolute bottom-1  px-3 flex-row items-center')]}>
          <Text
            style={[
              tailwind('font-regular font-12 rounded text-light bg-primary'),
              {paddingHorizontal: 2, paddingVertical: 1},
            ]}>
            {props.teamname}
          </Text>
          <Text
            style={[
              tailwind('font-regular font-12 rounded bg-secondary'),
              {paddingHorizontal: 2, paddingVertical: 1},
            ]}>
            {props.title}
          </Text>
        </View>

        <View style={[tailwind('flex-col justify-center')]}>
          <Text style={[tailwind('font-semibold font-16 text-light')]}>
            {props.name}
          </Text>
          <Text style={[tailwind('font-regular py-1 font-13 text-gray-400')]}>
            {props.points}
          </Text>
        </View>
      </View>

      {/* Points */}
      <View
        style={[tailwind('flex-row justify-between items-center'), {flex: 5}]}>
        <View
          style={[tailwind('flex-col justify-center items-center'), {flex: 5}]}>
          <View style={[tailwind('border border-white px-4 py-3 rounded-3xl')]}>
            <Text style={[tailwind('font-bold font-15 text-light')]}>C</Text>
          </View>
          <Text style={[tailwind('font-regular text-gray-400 py-1 font-15')]}>
            {props.c}
          </Text>
        </View>
        <View
          style={[tailwind('flex-col justify-center items-center'), {flex: 5}]}>
          <View style={[tailwind('border border-white p-3 rounded-3xl')]}>
            <Text style={[tailwind('font-regular font-15 text-light')]}>
              VC
            </Text>
          </View>
          <Text style={[tailwind('font-regular text-gray-400 py-1 font-15')]}>
            {props.vc}
          </Text>
        </View>
      </View>
    </View>
  );
}
