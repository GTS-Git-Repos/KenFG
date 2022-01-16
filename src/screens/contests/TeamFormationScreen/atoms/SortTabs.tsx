import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DownArrowIcon} from '../../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function SortTabs(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center py-2')]}>
      <View style={[{flex: 2}]}></View>
      <View style={[{flex: 4}]}>
        <Text
          style={[tailwind('font-bold  font-12 px-2 text-dark-1 uppercase')]}>
          SELECTED BY
        </Text>
      </View>
      <View style={[{flex: 2}]}>
        <Text
          style={[
            tailwind(
              'font-bold text-center font-12 px-2 text-dark-1 uppercase',
            ),
          ]}>
          POINTS
        </Text>
      </View>
      <View style={[tailwind('flex-row items-center pl-2'), {flex: 2}]}>
        <Text
          style={[
            tailwind('font-bold font-12 text-center  text-dark-1 uppercase'),
          ]}>
          CREDITS
        </Text>
        <TouchableOpacity style={[tailwind('pl-2')]}>
          <DownArrowIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}
