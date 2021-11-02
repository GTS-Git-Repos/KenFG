import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function SelectionTabs(props: PropTypes) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[tailwind('bg-primary')]}>
      <View style={[{width: 100}, tailwind('py-2')]}>
        <Text
          style={[tailwind('font-regular text-gray-400 text-center font-15')]}>
          WK (1)
        </Text>
      </View>
      <View style={[{width: 100}, tailwind('py-2')]}>
        <Text
          style={[tailwind('font-regular text-gray-400 text-center font-15')]}>
          BAT (4)
        </Text>
      </View>
      <View style={[{width: 100}, tailwind('py-2')]}>
        <Text
          style={[tailwind('font-regular text-gray-400 text-center font-15')]}>
          AR (1)
        </Text>
      </View>
      <View style={[{width: 100}, tailwind('py-2')]}>
        <Text
          style={[tailwind('font-regular text-gray-400 text-center font-15')]}>
          BOWL (5)
        </Text>
      </View>
    </ScrollView>
  );
}
