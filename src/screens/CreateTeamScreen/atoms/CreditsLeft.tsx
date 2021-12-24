import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  left: number;
}

export default function CreditsLeft(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row justify-end'), {flex: 3.5}]}>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row justify-end items-center')]}>
          <Text style={[tailwind('font-bold text-white'), {fontSize: 26}]}>
            {props.left}
          </Text>
        </View>
        <Text style={[tailwind('font-bold text-right text-dark-1 font-12')]}>
          CREDITS LEFT
        </Text>
      </View>
    </View>
  );
}
