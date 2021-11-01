import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function HeaderWinningsList(props: PropTypes) {
  return (
    <View>
      <Text
        style={[
          tailwind('font-regular px-3 font-13 text-gray-400'),
          {paddingVertical: 12},
        ]}>
        Be the First in your network to join this contenst
      </Text>

      <View
        style={[
          tailwind('flex-row items-center border-b border-gray-800'),
          {paddingVertical: 10},
        ]}>
        <View style={[tailwind('pl-4 text-left w-6/12')]}>
          <Text style={[tailwind('font-regular text-gray-400 font-15')]}>
            Rank
          </Text>
        </View>

        <View style={[tailwind('pr-4 w-6/12')]}>
          <Text
            style={[tailwind('font-regular text-right text-gray-400 font-15')]}>
            Winnings
          </Text>
        </View>
      </View>
    </View>
  );
}
