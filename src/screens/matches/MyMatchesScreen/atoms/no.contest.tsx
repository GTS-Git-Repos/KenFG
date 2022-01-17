import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {SecondaryButton} from '../../../../sharedComponents';

interface PropTypes {
  text: string;
}

export default function NoContent(props: PropTypes) {
  return (
    <ImageBackground
      source={assets.stadium}
      style={[tailwind('w-full'), {flexGrow: 1}]}
      resizeMode="cover">
      <View style={[tailwind(''), {paddingVertical: 59}]}>
        <Text style={[tailwind('font-regular text-center text-white font-14')]}>
          {props.text}
        </Text>
        <View style={[tailwind('flex-row pt-2 justify-center')]}>
          <Image
            resizeMode="contain"
            source={assets.coin}
            style={{width: 183, height: 142}}
          />
        </View>

        <Text
          style={[
            tailwind('font-regular text-center mx-7 text-white font-14'),
          ]}>
          Test your Game Skill & Knowledge as Team Manager
        </Text>
        <TouchableOpacity style={[tailwind('mx-16 my-7')]}>
          <SecondaryButton text={'VIEW UPCOMMING MATCHES'} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
