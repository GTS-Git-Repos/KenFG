import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import {DownArrowIcon, TopArrowIcon} from '../../../../sharedComponents';

interface PropTypes {
  sortStatus: any;
  sortByLowCredits: boolean;
  setSortByLowCredits(bool: boolean): any;
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
      <TouchableOpacity
        onPress={() => props.setSortByLowCredits(!props.sortByLowCredits)}
        style={[tailwind('flex-row items-center pl-2'), {flex: 2}]}>
        <Text
          style={[
            tailwind('font-bold font-12 text-center  text-dark-1 uppercase'),
          ]}>
          CREDITS
        </Text>
        <View style={[tailwind('pl-2')]}>
          {props.sortByLowCredits ? <DownArrowIcon /> : <TopArrowIcon />}
        </View>
      </TouchableOpacity>
    </View>
  );
}
