import React from 'react';
import {View,Text} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  date: string;
  dT: boolean;
}

export default function TransactionDate(props: PropTypes) {
  return (
    <View style={[{paddingVertical: 10, paddingHorizontal: 16}]}>
      <Text style={[{fontSize: 13}, props.dT ? clr.td1 : clr.tdgray]}>
        {props.date}
      </Text>
    </View>
  );
}
