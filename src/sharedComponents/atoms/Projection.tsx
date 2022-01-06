import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  completed: boolean;
  msg: string;
}

export default function Projection(props: PropTypes) {
  return (
    <View>
      <Text style={[tailwind('font-bold text-white text-center font-13')]}>
        {props.msg}
      </Text>
      {/* {props.completed ? (
       
      ) : (
        <Text style={[tailwind('font-bold text-white text-center font-13')]}>
          AUS need 170 runs to win
        </Text>
      )} */}
    </View>
  );
}
