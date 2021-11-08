import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function RowHeader(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center p-2')]}>
      <View style={[tailwind('flex-row'), {flex: 5}]}>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text style={[tailwind('font-regular font-15 text-light uppercase')]}>
            Type
          </Text>
          <Icon
            name="arrow-down"
            style={[tailwind('px-1')]}
            color="red"
            size={18}
          />
          <Text
            style={[
              tailwind(
                'font-regular px-1 font-15 text-center text-light uppercase',
              ),
            ]}>
            Point
          </Text>
        </View>
      </View>
      {/* Point row */}
      <View style={[tailwind('flex-row'), {flex: 5}]}>
        <Text
          style={[
            tailwind(
              'font-regular px-1 font-15 text-light text-center uppercase',
            ),
            {flex: 5},
          ]}>
          % C BY
        </Text>
        <Text
          style={[
            tailwind('font-regular px-1 font-15 text-light uppercase'),
            {flex: 5},
          ]}>
          % VC BY
        </Text>
      </View>
    </View>
  );
}
