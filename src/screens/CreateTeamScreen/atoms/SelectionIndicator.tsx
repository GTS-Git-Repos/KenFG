import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Circle, Triangle} from 'react-native-shape';
import Svg, {Path, Polygon} from 'react-native-svg';

// const FULLWIDTH = Dimensions.get('window').width;
// const H_SPACE = 10;
// const CELLWIDTH = (() => {
//   console.log('CONTENT', FULLWIDTH - H_SPACE * 2);
//   return (FULLWIDTH - H_SPACE + H_SPACE) / 11;
// })();

// console.log('FULLWIDTH', FULLWIDTH);
// console.log('H_SPACE', H_SPACE);
// console.log('CELLWIDTH', CELLWIDTH);

interface PropTypes {
  count: number;
}

export default function SelectionIndicator(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'border flex-row px-2 border justify-between items-center py-2',
        ),
      ]}>
      <View style={[tailwind('h-5'), {flex: 1}]}>
        <View style={[tailwind('bg-red-500 mx-1')]}></View>
      </View>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
        return (
          <View
            key={item}
            style={[tailwind('flex-row items-center'), {flex: 1}]}>
            <Svg style={[tailwind(''), {flex: 1}]} width="100%" height="12">
              <Path
                d="M20 0.5L14.4444 10.5H0L5.1634 0.5H20Z"
                fill={index > 7 ? '#FFFFFF' : '#F10404'}
              />
            </Svg>
          </View>
        );
      })}
      {/*       
      <Svg width="40" height="17" viewBox="0 0 40 17" fill="none">
        <Path d="M40 0.5L28.8889 16.5H0L10.3268 0.5H40Z" fill="#F10404" />
      </Svg> */}
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2}]}>
        <Icon name="add-circle-outline" color="white" size={20} />
      </View>
    </View>
  );
}

/* Polygon 1 */

<svg
  width="20"
  height="11"
  viewBox="0 0 20 11"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M20 0.5L14.4444 10.5H0L5.1634 0.5H20Z" fill="#F10404" />
</svg>;
