import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  op_team: string;
  date: string;
  selected_by: string;
  points: string;
  credits: string;
}

export default function PlayerMatch(props: PropTypes) {
  return (
    <LinearGradient
      colors={['#131e30', '#162135']}
      style={[tailwind('rounded-b p-2')]}>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Text style={[tailwind('font-regular text-light font-15')]}>vs</Text>
          <Text style={[tailwind('font-bold px-1 text-light font-15')]}>{props.op_team}</Text>
          <Text style={[tailwind('font-regular px-3 text-light font-13')]}>{props.date}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
