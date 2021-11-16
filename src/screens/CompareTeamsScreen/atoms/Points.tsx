import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function Points(props: PropTypes) {
  return (
    <View style={[tailwind('bg-primary')]}>
      <View style={[tailwind('')]}>
        <Text
          style={[
            tailwind('font-regular py-1 text-center text-light font-16'),
          ]}>
          Total Points
        </Text>
        <View style={[tailwind('flex-row justify-center items-center ')]}>
          <Text
            style={[tailwind('font-bold text-center px-4 text-light font-20')]}>
            50
          </Text>
          <View
            style={[
              tailwind('w-0.5 bg-secondary h-9'),
              {transform: [{rotate: '20deg'}]},
            ]}></View>
          <Text
            style={[tailwind('font-bold text-center px-4 text-light font-20')]}>
            434
          </Text>
        </View>
      </View>
    </View>
  );
}
