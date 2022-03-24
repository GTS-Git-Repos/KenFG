import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {TabsBottomLine} from '../../../../sharedComponents';

interface PropTypes {
  active: boolean;
  tabName: string;
  count: number;
  onTabPressed(index: number): any;
  index: number;
  dT: boolean;
}

export default function TabItem(props: PropTypes) {
  const width = useWindowDimensions().width;
  const TABWIDTH = (width - 32) / 4;

  return (
    <TouchableOpacity
      onPress={() => {
        props.onTabPressed(props.index);
      }}
      style={[{width: TABWIDTH}]}>
      <View style={[ss.root]}>
        {props.dT ? (
          <Text style={[ss.txt, props.active && ss.dTxt]}>
            {props.tabName} ({props.count})
          </Text>
        ) : (
          <Text style={[ss.txt, props.active && ss.lTxt]}>
            {props.tabName} ({props.count})
          </Text>
        )}

        {props.active && <TabsBottomLine />}
      </View>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingTop: 12,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    textAlign: 'center',
    fontSize: 13,
    color: '#8797B1',
  },
  dTxt: {
    color: '#FFFFFF',
  },
  lTxt: {
    color: '#9C181E',
  },
});
