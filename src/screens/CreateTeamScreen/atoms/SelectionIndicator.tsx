import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Dimensions, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Circle, Triangle} from 'react-native-shape';
import assets from '../../../constants/assets_manifest';
import Svg, {Path, Polygon} from 'react-native-svg';
import {Rating, AirbnbRating} from 'react-native-ratings';

interface PropTypes {
  count: number;
}

export default function SelectionIndicator(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row p-2 my-1 justify-between items-center')]}>
      <View style={[tailwind('h-5'), {flex: 1}]}>
        <View style={[tailwind('bg-red-500 mx-1')]}></View>
      </View>
      {/* 11 Indicator */}
      <View style={[tailwind('flex-row items-center'), {flex: 7}]}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
          return (
            <View
              key={item}
              style={[
                tailwind('flex-row items-center'),
                {flex: 1, height: 20},
              ]}>
              <Svg style={[tailwind(''), {flex: 1}]} width="100%" height="17">
                <Path
                  d="M20 0.5L14.4444 10.5H0L5.1634 0.5H20Z"
                  fill={index > 7 ? '#FFFFFF' : '#00513B'}
                />
              </Svg>
            </View>
          );
        })}
      </View>
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2}]}>
        <Image
          resizeMode="contain"
          source={assets.minus}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
      </View>
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
