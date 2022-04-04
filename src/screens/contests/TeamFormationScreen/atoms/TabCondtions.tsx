import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ChartIcon} from '../../../../assets/newIcons';
import clr from '../../../../constants/colors';

interface PropTypes {
  filterSheet: any;
  text: string;
  filterTeam: any;
  dT: boolean;
}

export default function TopConditions(props: PropTypes) {
  return (
    <View style={[ss.root, props.dT ? ss.dBorder : ss.lBorder]}>
      <Text style={[ss.txt, props.dT ? clr.td2 : clr.td1]}>{props.text}</Text>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity
          onPress={() => {
            props.filterSheet?.current?.open();
          }}
          style={[ss.space1]}>
          <ChartIcon dT={props.dT} />
        </TouchableOpacity>
        {props.filterTeam !== null && (
          <View style={[ss.pin, props.dT ? clr.bgg : clr.bgRed]}></View>
        )}
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  dBorder: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
  },
  lBorder: {
    borderColor: 'rgba(31, 41, 55,0.2)',
    borderBottomWidth: 1,
  },
  txt: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 13,
  },
  space1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pin: {
    width: 8,
    height: 8,
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
