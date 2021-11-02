import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Dimensions, FlatList} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const FULLWIDTH = Dimensions.get('window').width;
const H_SPACE = 10;
const CELLWIDTH = (() => {
  console.log('CONTENT', FULLWIDTH - H_SPACE * 2);
  return (FULLWIDTH - H_SPACE + H_SPACE) / 11;
})();

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
        {width: FULLWIDTH},
      ]}>
      {/* <View style={[tailwind('border'), {width: 20}]}>
        <Text style={[tailwind('font-regular font-15')]}>-</Text>
      </View> */}
      {/* <View
        style={[tailwind('flex-row flex-grow justify-between items-center')]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item: any) => {
          return (
            <View key={item} style={[tailwind('flex-1')]}>
              <View style={[tailwind('bg-blue-500 border h-4')]}></View>
            </View>
          );
        })}
      </View> */}
    </View>
  );
}
