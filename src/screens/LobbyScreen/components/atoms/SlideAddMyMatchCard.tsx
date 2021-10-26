import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function SlideAddMyMatchCard(props: PropTypes) {
  return (
    <View style={[tailwind('bg-gray-900 rounded-b py-2')]}>
      <Text
        style={[tailwind('font-regular text-center text-gray-400 font-10')]}>
        Slide AD....
      </Text>
    </View>
  );
}
