import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const IMAGESIZE = 90;

interface PropTypes {
  image: string;
  name: string;
  username: string;
  level: string;
}

//
//

export default function UserProfileCard(props: PropTypes) {
  return (
    <LinearGradient
      style={[tailwind('pt-3 px-4 rounded-t-lg mt-4 mb-3 ')]}
      colors={['#006A4D', '#004633']}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind(''), {flex: 2}]}>
          <View style={[tailwind('rounded-full'), {width: 62, height: 70}]}>
            <Image
              resizeMode="contain"
              source={assets.player}
              style={[tailwind('w-full h-full')]}
            />
          </View>
        </View>
        <View style={[tailwind('flex-row items-center'), {flex: 7}]}>
          <View
            style={[
              tailwind('flex-col items-center justify-start'),
              {flex: 7 / 3},
            ]}>
            <Text style={[tailwind('font-regular text-light font-13')]}>
              Selected By
            </Text>
            <Text
              style={[
                tailwind('font-regular text-center text-light py-1 font-16'),
              ]}>
              10.43 6%
            </Text>
          </View>
          <View
            style={[
              tailwind('flex-col   items-center justify-center'),
              {flex: 7 / 3},
            ]}>
            <Text style={[tailwind('font-regular text-light font-13')]}>
              Points
            </Text>
            <Text
              style={[
                tailwind('font-regular text-light text-center py-1 font-16'),
              ]}>
              3
            </Text>
          </View>
          <View
            style={[
              tailwind('flex-col items-center justify-end'),
              {flex: 7 / 3},
            ]}>
            <Text style={[tailwind('font-regular text-light font-13')]}>
              Credits
            </Text>
            <Text
              style={[
                tailwind('font-regular text-center text-light py-1 font-16'),
              ]}>
              9.6
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: IMAGESIZE,
    height: IMAGESIZE,
    borderRadius: IMAGESIZE / 2,
  },
});
