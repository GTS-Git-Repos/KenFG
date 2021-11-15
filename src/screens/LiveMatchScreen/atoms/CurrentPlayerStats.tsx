import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  player1: string;
  player1_runs: string;
  player1_balls: string;
  player2: string;
  player2_runs: string;
  player2_balls: string;
  active: number;
}

export default function CurrentPlayerStats(props: PropTypes) {
  return (
    <View style={[tailwind('flex-col')]}>
      <View style={[tailwind('flex-row justify-between items-center py-1')]}>
        <Text style={[tailwind('font-bold text-light font-14')]}>
          {props.player1}*
        </Text>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text style={[tailwind('font-regular text-light font-13')]}>
            {props.player1_runs}
          </Text>
          <Text style={[tailwind('font-regular px-1 text-light font-13')]}>
            ({props.player1_balls})
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row justify-between py-1 items-center')]}>
        <Text style={[tailwind('font-bold text-light font-14')]}>
          {props.player2}
        </Text>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text style={[tailwind('font-regular text-light font-13')]}>
            {props.player2_runs}
          </Text>
          <Text style={[tailwind('font-regular px-1 text-light font-13')]}>
            ({props.player2_balls})
          </Text>
        </View>
      </View>
    </View>
  );
}
