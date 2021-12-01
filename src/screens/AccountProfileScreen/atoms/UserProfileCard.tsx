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
        <View
          style={[
            tailwind('bg-blue-500 rounded-full'),
            {width: 60, height: 60},
          ]}></View>
      </View>
      <View style={[tailwind(''), {flex: 7}]}>
        <Text
          numberOfLines={1}
          style={[tailwind('font-bold text-light font-16')]}>
          Kai Ro
        </Text>
        <Text
          numberOfLines={1}
          style={[tailwind('font-regular text-dark-1 py-1 font-12')]}>
          Karthikeyan
        </Text>
        <View style={[tailwind('flex-row items-center')]}>
          <View
            style={[
              tailwind('bg-red-500 rounded-full'),
              {width: 18, height: 18},
            ]}></View>
          <Text style={[tailwind('font-regular px-1 text-light font-15')]}>
            Level 231
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
