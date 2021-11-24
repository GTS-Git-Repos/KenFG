import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function RowHeader(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row bg-dark-2 items-center px-2 py-3')]}>
      <View style={[tailwind('flex-row'), {flex: 5}]}>
        <Text
          style={[tailwind('font-bold px-3 text-dark-1 uppercase font-13')]}>
          Player
        </Text>
      </View>
      {/* Point row */}
      <View style={[tailwind('flex-row'), {flex: 5}]}>
        <Text
          style={[
            tailwind(
              'font-bold px-3 text-dark-1 text-center uppercase font-13',
            ),
            {flex: 5},
          ]}>
          % C BY
        </Text>
        <Text
          style={[
            tailwind('font-bold px-3 text-dark-1 text-right uppercase font-13'),
            {flex: 5},
          ]}>
          % VC BY
        </Text>
      </View>
    </View>
  );
}
