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
    <View style={[tailwind('flex flex-row items-center justify-between')]}>
      <Text
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[
          tailwind('font-regular text-center'),
          {width: width / 3, fontSize: 10, color: '#8797B1'},
        ]}>
        World T20 Championship
      </Text>
      <View
        style={[tailwind('flex flex-1 flex-row justify-center items-center')]}>
        <Text
          style={[
            tailwind('font-regular text-center pr-1 font-10'),
            {fontSize: 14, color: '#FEFEFF'},
          ]}>
          LIVE
        </Text>
        <View
          style={[
            tailwind('rounded-full'),
            {backgroundColor: 'green', width: 5, height: 5},
          ]}></View>
      </View>
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
