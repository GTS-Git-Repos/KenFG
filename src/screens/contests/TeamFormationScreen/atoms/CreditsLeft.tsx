import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  left: number;
  dT: boolean;
}

export default function CreditsLeft(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <View>
        <View style={[ss.container]}>
          <Text style={[ss.count, props.dT ? clr.tw : clr.tr]}>
            {props.left}
          </Text>
        </View>
        <Text style={[ss.tx2, props.dT ? clr.td2 : clr.tdgray]}>
          CREDITS LEFT
        </Text>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flex: 3.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    alignItems: 'center',
  },
  count: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 26,
  },
  txt: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 12,
    paddingHorizontal: 4,
  },
  tx2: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 12,
    textAlign: 'right',
  },
});
