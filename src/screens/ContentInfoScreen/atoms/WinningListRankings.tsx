import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  rank: string;
  amount: string;
}

export default function WinningListRankings(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center border-b border-gray-800'),
        {paddingVertical: 10},
      ]}>
      <View style={[tailwind('pl-4 text-left w-6/12')]}>
        <Text style={[tailwind('font-semibold text-gray-200 font-15')]}>
          <Text style={[tailwind('font-regular font-15')]}>#</Text>
          {props.rank}
        </Text>
      </View>

      <View style={[tailwind('pr-4 w-6/12')]}>
        <Text
          style={[tailwind('font-semibold text-right text-gray-200 font-15')]}>
          {'\u20B9 '}
          {props.amount}
        </Text>
      </View>
    </View>
  );
}
