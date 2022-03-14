import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  msg: string;
}

export default function Projection(props: PropTypes) {
  return (
    <View>
      <Text style={[tailwind('font-bold text-white text-center font-13')]}>
        {props.msg}
      </Text>
    </View>
  );
}
