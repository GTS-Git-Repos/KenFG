import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DownArrowIcon} from '../../../../assets/newIcons';

interface PropTypes {
  sortStatus: any;
  onSortAction(sort_by: string): any;
  dT: boolean;
}

export default function SortTabs(props: PropTypes) {
  // console.log(props.sortStatus);

  return (
    <View style={[styles.root]}>
      <View style={[styles.space]}></View>

      <TouchableOpacity
        onPress={() => props.onSortAction('selby')}
        style={[styles.b1]}>
        <Text style={styles.filterText}>SELECTED BY</Text>
        {props.sortStatus.sortBySel === false && (
          <DownArrowIcon invert={false} />
        )}
        {props.sortStatus.sortBySel === true && <DownArrowIcon invert={true} />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onSortAction('points')}
        style={[tailwind('flex-row items-center'), {flex: 2}]}>
        <Text style={styles.filterText}>POINTS</Text>
        {props.sortStatus.sortByPoints === false && (
          <DownArrowIcon invert={false} />
        )}
        {props.sortStatus.sortByPoints === true && (
          <DownArrowIcon invert={true} />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onSortAction('credits')}
        style={[tailwind('flex-row items-center pr-2'), {flex: 2}]}>
        <Text style={styles.filterText}>CREDITS</Text>
        {props.sortStatus.sortByCredits === false && (
          <DownArrowIcon invert={false} />
        )}
        {props.sortStatus.sortByCredits === true && (
          <DownArrowIcon invert={true} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  space: {
    flex: 2,
  },
  filterText: {
    color: '#8797B1',
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    paddingHorizontal: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  b1: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4,
    left: 24,
  },
});
