import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DownArrowIcon} from '../../assets/newIcons/';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ContestPageType} from '../../types/contest';

export default function SortContests(
  props: Pick<ContestPageType, 'sortStatus' | 'sortByOnPress'>,
) {
  // console.log(props.sortStatus);

  return (
    <View style={[ss.root]}>
      <TouchableOpacity
        onPress={() =>
          props.sortByOnPress({
            price: !props.sortStatus.price,
            entry: null,
          })
        }
        style={[ss.btn]}>
        {props.sortStatus.price !== null && (
          <DownArrowIcon invert={props.sortStatus.price} />
        )}
        <Text style={[ss.btntxt]}>Total Price</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.sortByOnPress({
            price: null,
            entry: !props.sortStatus.entry,
          })
        }
        style={[ss.btn]}>
        <Text style={[ss.btntxt]}>Entry Fee</Text>
        {props.sortStatus.entry !== null && (
          <DownArrowIcon invert={props.sortStatus.entry} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: 'rgba(31, 41, 55, 1)',
    borderBottomColor: 'rgba(31, 41, 55, 1)',
    borderWidth: 1,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  btntxt: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingHorizontal: 8,
  },
});
