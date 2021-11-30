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
    <LinearGradient
      end={{x: 0.0, y: 0.5}}
      start={{x: 0.8, y: 2.0}}
      locations={[0.6, 0.5]}
      style={[tailwind('my-2 rounded p-2')]}
      colors={['#B2933D', '#C5A858']}
      >
      <View
        style={[
          tailwind('rounded p-1 flex-row  items-center justify-center '),
        ]}>
        <Text style={[tailwind('font-bold text-brown-4 px-2 font-18')]}>
          {props.text}
        </Text>
      </View>
    </LinearGradient>
  );
}
