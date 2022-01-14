import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function ProfileCard(props: PropTypes) {
  return (
    <View style={[tailwind('py-1')]}>
      <View style={[tailwind('mx-6'), {width: 75, height: 82}]}>
        <Image
          resizeMode="contain"
          source={assets.player}
          style={[tailwind(''), {width: 75, height: 82}]}
        />
        <TeamTag />
      </View>
      <View style={[tailwind('bg-dark-3 rounded mx-2')]}>
        <ProfileName />
        <PlayerStats />
      </View>
    </View>
  );
}

const TeamTag = () => {
  return (
    <View
      style={[tailwind('absolute bg-green p-0.5 bottom-1'), {borderRadius: 2}]}>
      <Text style={[tailwind('font-bold text-white font-9')]}>IND</Text>
    </View>
  );
};

const ProfileName = () => {
  return (
    <View style={[tailwind('px-5 rounded-t-lg')]}>
      <Text style={[tailwind('font-bold text-white font-19')]}>
        Sachin Tendulkar
      </Text>
      <Text
        style={[tailwind('font-regular text-white py-0.5 uppercase font-12')]}>
        BAT
      </Text>
    </View>
  );
};

const PlayerStats = () => {
  return (
    <View
      style={[
        tailwind('px-4 rounded-b-lg py-1 flex-row items-center flex-wrap'),
      ]}
      colors={['#0D1320', '#172338']}>
      <View style={[tailwind('flex-row items-center')]}>
        <View
          style={[tailwind('w-2 h-2 mx-1 rounded-full bg-green-500')]}></View>
        <Text style={[tailwind('font-regular text-green-500 font-11')]}>
          Announced
        </Text>
      </View>
      <View style={[tailwind('flex-row px-1 items-center')]}>
        <Text
          //   allowFontScaling={true}
          //   adjustsFontSizeToFit={true}
          style={[tailwind('font-regular text-white font-10')]}>
          (Indicative Information as per official sources)
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 px-1 font-10')]}>
          T&C
        </Text>
      </View>
    </View>
  );
};
