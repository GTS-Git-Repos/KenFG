import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';


export default function RowHeader() {
  return (
    <View style={[tailwind('flex-row p-3')]}>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-left text-light font-15')]}>
          EVENT
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-center text-light font-15')]}>
          ACTUAL
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-right text-light font-15')]}>
          POINTS
        </Text>
      </View>
    </View>
  );
}
