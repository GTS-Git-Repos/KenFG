import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';

const IMAGESIZE = 90;

interface PropTypes {
  image: string;
  name: string;
  username: string;
  level: string;
}

export default function UserProfileCard(props: PropTypes) {
  return (
    <View style={[tailwind('p-3 mt-2 mb-3 flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 2}]}>
        <View style={[tailwind('rounded-full'), {width: 60, height: 60}]}>
          <Image
            resizeMode="contain"
            source={assets.user_temp_profile}
            style={[tailwind('w-full h-full')]}
          />
        </View>
      </View>
      <View style={[tailwind(''), {flex: 7}]}>
        <Text
          numberOfLines={1}
          style={[tailwind('font-bold text-light font-16')]}>
          {props.username}
        </Text>
        <Text
          numberOfLines={1}
          style={[tailwind('font-regular text-dark-1 py-1 font-12')]}>
          {props.name}
        </Text>
        <View style={[tailwind('flex-row items-center')]}>
          <View
            style={[
              tailwind('bg-red-500 rounded-full'),
              {width: 16, height: 16},
            ]}>
            <Image
              resizeMode="contain"
              source={assets.levels}
              style={[tailwind('w-full h-full')]}
            />
          </View>
          <Text style={[tailwind('font-regular px-1 text-light font-15')]}>
            Level {props.level}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: IMAGESIZE,
    height: IMAGESIZE,
    borderRadius: IMAGESIZE / 2,
  },
});
