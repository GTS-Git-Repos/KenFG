import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DownArrowIcon, TopArrowIcon} from '../../../../sharedComponents';

interface PropTypes {
  sortStatus: any;
  onSortAction(sort_by: string): any;
}

export default function SortTabs(props: PropTypes) {
  // console.log(props.sortStatus);

  return (
    <View style={[tailwind('flex-row items-center py-2')]}>
      <View style={[{flex: 2.5}]}></View>

      <TouchableOpacity
        onPress={() => props.onSortAction('selby')}
        style={[tailwind('flex-row items-center'), {flex: 4}]}>
        <Text style={styles.filterText}>SELECTED BY</Text>
        {props.sortStatus.sortBySel === false && <DownArrowIcon />}
        {props.sortStatus.sortBySel === true && <TopArrowIcon />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onSortAction('points')}
        style={[tailwind('flex-row items-center'), {flex: 2}]}>
        <Text style={styles.filterText}>POINTS</Text>
        {props.sortStatus.sortByPoints === false && <DownArrowIcon />}
        {props.sortStatus.sortByPoints === true && <TopArrowIcon />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onSortAction('credits')}
        style={[tailwind('flex-row items-center pr-2'), {flex: 2}]}>
        <Text style={styles.filterText}>CREDITS</Text>
        {props.sortStatus.sortByCredits === false && <DownArrowIcon />}
        {props.sortStatus.sortByCredits === true && <TopArrowIcon />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filterText: {
    color: '#8797B1',
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    paddingHorizontal: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
