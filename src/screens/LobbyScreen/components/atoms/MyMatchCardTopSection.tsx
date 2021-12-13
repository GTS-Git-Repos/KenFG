import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function MyMatchCardTopSection(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View style={[tailwind('px-1 flex-row items-center justify-between')]}>
      <Text
        numberOfLines={1}
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[
          tailwind('font-regular text-center'),
          {width: width / 3, fontSize: 10, color: '#8797B1'},
        ]}>
        World T20 Championship
      </Text>

      <Text
        style={[
          tailwind('font-regular text-center font-10'),
          {width: width / 3, color: '#8797B1'},
        ]}>
        <Text style={[tailwind('font-bold text-white')]}>2</Text> Team |
        <Text style={[tailwind('font-bold text-white')]}> 1 </Text>
        Contact
      </Text>
    </View>
  );
}
