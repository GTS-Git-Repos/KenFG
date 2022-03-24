import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  count: number;
  dT: boolean;
}

export default function SelectedIndcator(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <View style={[ss.container]}>
        <Text style={[ss.count, props.dT ? clr.tw : clr.tr]}>
          {props.count}
        </Text>
        <Text style={[ss.txt, props.dT ? clr.tgl : clr.tdgray]}>/11</Text>
      </View>
      <Text style={[ss.tx2, props.dT ? clr.td2 : clr.tdgray]}>
        PLAYERS SELECTED
      </Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flex: 3.5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontFamily: 'gadugi-bold',
    fontSize: 26,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    paddingHorizontal: 4,
  },
  tx2: {
    fontFamily: 'gadugi-bold',
    fontSize: 12,
  },
});
