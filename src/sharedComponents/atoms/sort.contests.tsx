import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import {DownArrowIcon} from '../../assets/newIcons/';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PropTypes {
  sortStatus?: string;
}

export default function SortContests(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <TouchableOpacity style={[ss.btn]}>
        <DownArrowIcon invert={false} />
        <Text style={[ss.btntxt]}>Total Price</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ss.btn]}>
        <Text style={[ss.btntxt]}>Entry Fee</Text>
        <DownArrowIcon invert={false} />
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
