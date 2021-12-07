import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Circle, Triangle} from 'react-native-shape';
import assets from '../../../constants/assets_manifest';
import Svg, {Defs, LinearGradient, Path, Polygon, Stop} from 'react-native-svg';
import {Rating, AirbnbRating} from 'react-native-ratings';

interface PropTypes {
  count: number;
  clearRef: any;
}

export default function SelectionIndicator(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row p-2 my-1 justify-between items-center')]}>
      <View style={[tailwind('h-5'), {flex: 1}]}>
        <View style={[tailwind('bg-red-500 mx-1')]}></View>
      </View>
      {/* 11 Indicator */}
      <View style={[tailwind('flex-row items-center'), {flex: 7}]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
          return (
            <View
              key={item}
              style={[
                tailwind('flex-row items-center'),
                {flex: 1, height: 20},
              ]}>
              <Svg width="100%" height="24" viewBox="0 0 29 24" fill="none">
                <Path
                  d="M0 0H24L29 24H5L0 0Z"
                  fill={item <= props.count ? '#006A4D' : 'white'}
                />
                <Defs>
                  <LinearGradient
                    id="paint0_linear_225_964"
                    x1="14.5"
                    y1="0"
                    x2="14.5"
                    y2="24"
                    gradientUnits="userSpaceOnUse">
                    <Stop stop-color="#006A4D" />
                    <Stop offset="1" stop-color="#00513B" />
                  </LinearGradient>
                </Defs>
                {item === props.count && (
                  <Text
                    style={[
                      tailwind('font-bold text-center text-light font-12'),
                      {top: 4},
                    ]}>
                    {props.count}
                  </Text>
                )}
              </Svg>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => props.clearRef?.current?.open()}
        style={[tailwind('flex-row items-center justify-center'), {flex: 2}]}>
        <Image
          resizeMode="contain"
          source={assets.minus}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
      </TouchableOpacity>
    </View>
  );
}

/* Polygon 1 */

// <svg
//   width="20"
//   height="11"
//   viewBox="0 0 20 11"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg">
//   <path d="M20 0.5L14.4444 10.5H0L5.1634 0.5H20Z" fill="#F10404" />
// </svg>;
