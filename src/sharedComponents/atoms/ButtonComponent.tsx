import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text: string;
}

export default function ButtonComponent(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('rounded p-3 flex-row  items-center justify-center '),
        {
          backgroundColor: '#00513B',
        },
      ]}>
      <Text style={[tailwind('font-bold text-light px-2 font-14')]}>
        {props.text}
      </Text>
    </View>
  );
}
