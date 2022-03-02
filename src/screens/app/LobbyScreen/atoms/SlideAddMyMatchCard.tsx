import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import clr from '../../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  dT: boolean;
}

export default function SlideAddMyMatchCard(props: PropTypes) {
  return (
    <LinearGradient
      colors={props.dT ? ['#131e30', '#162135'] : ['#E0E0E0', 'white']}
      style={[tailwind('rounded-b py-1')]}>
      <Text
        style={[
          tailwind('font-regular text-center font-10'),
          props.dT ? clr.td2 : clr.td1,
        ]}>
        Slide AD....
      </Text>
    </LinearGradient>
  );
}
