import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {SecondaryButton} from '../../../../sharedComponents';

interface PropTypes {
  loading: boolean;
  text: string;
  actionText: string;
}

export default function NoContent(props: PropTypes) {
  return (
    <ImageBackground
      source={assets.stadium}
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
              style={{width: '90%', height: 142}}
            />
          </View>
          <Text
            style={[
              tailwind('font-regular text-center mx-7 text-white font-14'),
            ]}>
            Test your Game Skill & Knowledge as Team Manager
          </Text>
          <TouchableOpacity style={[tailwind('mx-16 my-7')]}>
            <SecondaryButton text={props.actionText} />
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}
