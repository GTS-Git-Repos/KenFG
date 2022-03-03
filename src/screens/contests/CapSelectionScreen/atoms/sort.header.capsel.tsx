import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DownArrowIcon, TopArrowIcon} from '../../../../assets/newIcons';

interface PropTypes {
  sort: any;
  sortByAction(input: any): any;
}

export default function SortHeader(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            category: true,
          })
        }
        style={[ss.tab, {flex: 2.2}]}>
        <Text style={[ss.headText]}>CATEGORY</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            points: true,
          })
        }
        style={[ss.tab, {flex: 2.7}]}>
        <Text style={[ss.headText]}>Points</Text>
        {props.sort.sortByPoints === true && <TopArrowIcon />}
        {props.sort.sortByPoints === false && <DownArrowIcon />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            selc: true,
          })
        }
        style={[ss.tab, {flex: 2}]}>
        <Text style={[ss.headText]}>% C By</Text>
        {props.sort.sortByC === true && <TopArrowIcon />}
        {props.sort.sortByC === false && <DownArrowIcon />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            selvc: true,
          })
        }
        style={[ss.tab, {flex: 2}]}>
        <Text style={[ss.headText]}>% VC By</Text>
        {props.sort.sortByVc === true && <TopArrowIcon />}
        {props.sort.sortByVc === false && <DownArrowIcon />}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[tailwind('flex-row items-center px-4 py-3')]}>
      <View style={[tailwind('flex-row items-center'), {flex: 5}]}>
        <TouchableOpacity
          onPress={() =>
            props.sortByAction({
              sortByCategory: true,
            })
          }>
          <Text
            style={[
              tailwind('font-regular pr-1 text-dark-1 uppercase font-13'),
            ]}>
            CATEGORY
          </Text>
        </TouchableOpacity>
        {/* points sort  */}
        <TouchableOpacity
          onPress={() =>
            props.sortByAction({
              sortByPoints: true,
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

const ss = StyleSheet.create({
  tab: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingRight: 4,
    textTransform: 'uppercase',
  },
});
