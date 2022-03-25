import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  text: string;
  dT: boolean;
}

function MatchStatus(props: PropTypes) {
  return (
    <View style={[props.dT ? ss.root : ss.lRoot]}>
      <Text numberOfLines={1} style={[ss.txt, props.dT ? clr.td2 : clr.tdgray]}>
        {props.text}
      </Text>
    </View>
  );
}
const ss = StyleSheet.create({
  root: {
    paddingVertical: 12,
    borderColor: 'rgba(31, 41, 55,0.3)',
    borderBottomWidth: 1,
  },
  lRoot: {
    paddingVertical: 12,
    borderColor: 'rgba(31, 41, 55,0.05)',
    borderBottomWidth: 1,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    textAlign: 'center',
    fontSize: 12,
    letterSpacing: 0.5,
  },
});

export default React.memo(MatchStatus);
