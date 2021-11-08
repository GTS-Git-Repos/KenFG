import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text: string;
}

export default function TopConditions(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between p-2')]}>
      <Text style={[tailwind('font-regular font-15 text-light')]}>
        {props.text}
      </Text>
      <View style={[tailwind('flex-row items-center')]}>
        <Icon
          name="rocket-outline"
          style={[tailwind('px-2')]}
          size={20}
          color="white"
        />
        <Icon
          name="options-outline"
          style={[tailwind('px-2')]}
          size={20}
          color="white"
        />
      </View>
    </View>
  );
}
