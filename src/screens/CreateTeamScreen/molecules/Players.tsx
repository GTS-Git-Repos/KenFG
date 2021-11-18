import React from 'react';
import tailwind from '../../../../tailwind';
import assets from '../../../constants/assets_manifest';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  player_id: string;
  teamname: string;
  image: string;
  name: string;
  info: string;
  anounced: boolean;
  points: number;
  credits: number;
  isSelected: boolean;
}

export default function Player(props: PropTypes) {
  return (
    <LinearGradient style={[tailwind('')]} colors={['#162339', '#162339']}>
      <TouchableOpacity
        style={[
          tailwind('flex-row items-center pt-4 border-b border-gray-700'),
        ]}>
        <View style={[tailwind('border-white px-1'), {flex: 2, height: 90}]}>
          <Image
            resizeMode="contain"
            source={assets.playerImage}
            style={[tailwind('w-full'), {height: 90}]}
          />
          <Icon
            style={[tailwind('absolute mx-1')]}
            name="information-circle-outline"
            color="white"
            size={20}
          />
          <Text
            style={[
              tailwind(
                'font-regular font-12 rounded mx-2 absolute bottom-1 bg-gray-200',
              ),
              {paddingHorizontal: 2, paddingVertical: 1},
            ]}>
            {props.teamname}
          </Text>
        </View>
        <View style={[tailwind('border-white px-1'), {flex: 4}]}>
          <Text
            numberOfLines={1}
            style={[tailwind('font-semibold font-18 text-light')]}>
            {props.name}
          </Text>
          <Text style={[tailwind('font-regular py-1 font-12 text-gray-400')]}>
            {props.info}
          </Text>
          <Text style={[tailwind('font-regular text-green-500 py-1 font-12')]}>
            Anounced
          </Text>
        </View>
        <View style={[tailwind(' border-white'), {flex: 1}]}>
          <Text style={[tailwind('font-regular text-light font-17')]}>
            {props.points}
          </Text>
        </View>
        <View
          style={[tailwind(' flex-row items-center border-white'), {flex: 2}]}>
          <Text style={[tailwind('font-regular text-light px-2 font-18')]}>
            {props.credits}
          </Text>
          <Icon name="add-circle-outline" color="white" size={30} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
