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
          tailwind('font-regular text-center text-gray-400'),
          {width: width / 3, fontSize: 9},
        ]}>
        World T20 Championship
      </Text>
      <View
        style={[tailwind('flex flex-1 flex-row justify-center items-center')]}>
        <Text
          style={[
            tailwind('font-regular text-center pr-1 font-10 text-gray-400'),
            {fontSize: 9},
          ]}>
          LIVE
        </Text>
        {/* <Text style={[tailwind('font-regular font-20 text-red-500')]}>.</Text> */}
        <Icon name="radio-button-on" size={9} color="red" />
      </View>
      <Text
        style={[
          tailwind('font-regular text-center font-10 text-gray-400'),
          {width: width / 3},
        ]}>
        <Text style={[tailwind('font-bold text-white')]}>2</Text> Team |
        <Text style={[tailwind('font-bold text-white')]}> 1 </Text>
        Contact
      </Text>
    </View>
  );
}
