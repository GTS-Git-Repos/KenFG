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
import {SecondaryButton, TopBar} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  text?: string;
}

export default function NoContent(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <View style={[tailwind('h-full')]}>
      <TopBar text={'Team formation'} />
      <ImageBackground
        source={assets.stadium}
        style={[tailwind('w-full pt-20'), {flexGrow: 1}]}
        resizeMode="stretch">
        <View style={[tailwind(''), {paddingVertical: 59}]}>
          <Text style={[tailwind('font-bold text-center text-white font-18')]}>
            The Squad Did not out Yet !
          </Text>
          <View style={[tailwind('flex-row pt-2 justify-center')]}>
            <Image
              resizeMode="contain"
              source={assets.coin}
              style={{width: '90%', height: 142}}
            />
          </View>
          <Text
            style={[
              tailwind('font-regular text-center mx-7 text-white font-14'),
            ]}>
            Try Again Later
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[tailwind('mx-16 my-7')]}>
            <SecondaryButton text={'Go Back'} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
