import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  image: string;
  name: string;
  teamCode: string;
  points: number;
  rank: number;
  up: boolean;
}
const PROFILEWIDTH = Dimensions.get('window').width / 2;
const SUBTABWIDTH = PROFILEWIDTH / 2;

export default function HorizontalProfile(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('border-b border-gray-800 flex-row items-center'),
        {paddingVertical: 14},
      ]}>
      <View
        style={[
          tailwind('flex-row justify-between items-center'),
          {width: PROFILEWIDTH},
        ]}>
        <View style={[tailwind('flex-1 px-1 flex-row items-center')]}>
          <Image
            resizeMode="cover"
            source={{uri: props.image}}
            style={{borderRadius: 300, height: 35, width: 35}}
          />
          <View
            style={[
              tailwind('flex-row items-center px-2'),
              {width: PROFILEWIDTH - 35},
            ]}>
            <Text
              textBreakStrategy="highQuality"
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[tailwind('font-regular flex-1 text-gray-200 font-15')]}>
              {props.name}
            </Text>
            <Text
              style={[
                tailwind('font-regular bg-gray-300 rounded font-11'),
                {padding: 1},
              ]}>
              {props.teamCode}
            </Text>
          </View>
        </View>
      </View>

      <View style={[tailwind('flex-1'), {width: SUBTABWIDTH}]}>
        <Text
          style={[tailwind('font-regular font-13 text-center text-gray-400')]}>
          {' '}
          {props.points}
        </Text>
      </View>
      <View
        style={[
          tailwind('flex-row flex-1 items-center'),
          {width: SUBTABWIDTH},
        ]}>
        <View style={[tailwind('px-2')]}>
          <Text
            style={[tailwind('font-bold text-gray-400 font-15 items-center')]}>
            {props.rank}
          </Text>
        </View>
        {props.up ? (
          <Icon name="arrow-down" color="red" size={20} />
        ) : (
          <Icon name="arrow-up" color="green" size={20} />
        )}
      </View>
    </View>
  );
}
