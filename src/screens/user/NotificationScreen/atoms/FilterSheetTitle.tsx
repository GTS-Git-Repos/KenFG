import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  filterSheet: any;
  dT: boolean;
}

export default function FilterSheetTitle(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgGray]}>
      <TouchableOpacity onPress={() => props.filterSheet?.current?.close()}>
        <Icon name="close" size={17} color={dT ? 'white' : 'black'} />
      </TouchableOpacity>

      <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Filters</Text>
      <TouchableOpacity style={[tailwind('px-6')]}>
        {/* <Text style={[tailwind('font-regular uppercase text-white font-13')]}>
          Reset
        </Text> */}
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 13,
  },
});
