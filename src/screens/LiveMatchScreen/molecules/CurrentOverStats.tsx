import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// interface PropTypes {
//   text?: string;
// }

export default function CurrentOverStats() {
  return (
    <ScrollView>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text
            numberOfLines={2}
            style={[tailwind('font-bold text-white font-13'), {flex: 6}]}>
            A. Millence
          </Text>
          <View
            style={[tailwind('flex-row justify-end items-center'), {flex: 6}]}>
            <Text style={[tailwind('font-bold text-white font-14')]}>2/34</Text>
            <Text style={[tailwind('font-bold px-1 text-light font-14')]}>
              (3.2)
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
