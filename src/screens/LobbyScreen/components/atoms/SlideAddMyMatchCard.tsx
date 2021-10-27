import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function SlideAddMyMatchCard(props: PropTypes) {
  return (
    <LinearGradient
      colors={['#131e30', '#162135']}
      style={[tailwind('rounded-b py-2')]}>
      <Text
        style={[
          tailwind('font-regular text-center font-10'),
          {color: '#8797B1'},
        ]}>
        Slide AD....
      </Text>
    </LinearGradient>
  );
}
