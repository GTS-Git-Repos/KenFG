import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Circle, Triangle} from 'react-native-shape';

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
      {/* transform: [{skewY: '5deg'}]  */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item: any, index: number) => {
        return (
          <View
            key={item}
            style={{
              flex: 1,
              borderBottomColor: index < props.count ? 'red' : 'white',
              borderTopColor: 'transparent',
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderStyle: 'solid',
              borderBottomWidth: 15,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              marginHorizontal: 2,
            }}></View>
        );
      })}
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2}]}>
        <Icon name="add-circle-outline" color="white" size={20} />
      </View>
    </View>
  );
}
