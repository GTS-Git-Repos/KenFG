import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import {DownArrowIcon, TopArrowIcon} from '../../../../sharedComponents';

interface PropTypes {
  sortStatus: any;
  sortByAction(input: any): any;
}

export default function SortHeader(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center px-4 py-3')]}>
      <View style={[tailwind('flex-row items-center'), {flex: 5}]}>
        <TouchableOpacity
          onPress={() =>
            props.sortByAction({
              sortByPoints: null,
            })
          }>
          <Text
            style={[
              tailwind('font-regular pr-1 text-dark-1 uppercase font-13'),
            ]}>
            CATEGORY
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            props.sortByAction({
              sortByPoints: !props.sortStatus.sortByPoints,
            })
          }
          style={[tailwind('flex-row items-center')]}>
          <Text
            style={[
              tailwind('font-regular pl-4 pr-2 text-dark-1 uppercase font-13'),
            ]}>
            POINTS
          </Text>
          {props.sortStatus.sortByPoints === true && <TopArrowIcon />}
          {props.sortStatus.sortByPoints === false && <DownArrowIcon />}
        </TouchableOpacity>
      </View>
      {/* Point row */}
      <View style={[tailwind('flex-row'), {flex: 5}]}>
        <Text
          style={[
            tailwind(
              'font-regular px-3 text-dark-1 text-center uppercase font-13',
            ),
            {flex: 5},
          ]}>
          % C BY
        </Text>
        <Text
          style={[
            tailwind(
              'font-regular px-3 text-dark-1 text-right uppercase font-13',
            ),
            {flex: 5},
          ]}>
          % VC BY
        </Text>
      </View>
    </View>
  );
}
