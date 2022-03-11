// used create contest screen

import React from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import assets from '../../constants/assets_manifest';
import SecondaryButton from './secondaryButton';

interface PropTypes {
  loading: boolean;
  text: string;
  subtext: string;
  actionText: string;
  actionPress(): any;
}

export default function NoContentShared(props: PropTypes) {
  return (
    <ImageBackground
      source={assets.stadium_2}
      style={[tailwind('w-full'), {flexGrow: 1}]}
      resizeMode="stretch">
      {props.loading ? (
        <View style={[tailwind(''), {paddingVertical: 60}]}>
          <ActivityIndicator color="#d1b45a" size="large" />
        </View>
      ) : (
        <View style={[tailwind(''), {paddingVertical: 59}]}>
          <Text style={[tailwind('font-bold text-center text-white font-18')]}>
            {props.text}
          </Text>
          <View style={[tailwind('flex-row pt-2 justify-center')]}>
            <Image
              resizeMode="contain"
              source={assets.cricketGame}
              style={{wiwdth: '80%', height: 142}}
            />
          </View>
          <Text
            style={[
              tailwind('font-regular text-center mx-7 text-white font-14'),
            ]}>
            {props.subtext}
          </Text>
          <TouchableOpacity
            onPress={props.actionPress}
            activeOpacity={0.5}
            style={[tailwind('mx-16 my-7')]}>
            <SecondaryButton text={props.actionText} />
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}
