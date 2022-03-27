import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import {LinkIcon} from '../../../../assets/newIcons';
import clr from '../../../../constants/colors';

interface PropTypes {
  code: string;
  dT: boolean;
}

export default function UserCode(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[tailwind('flex-row items-center p-3 mb-4'), styles.border]}>
      <View
        style={[
          tailwind('bg-blue-500 rounded-full'),
          {width: 24, height: 24},
        ]}></View>
      <View style={[tailwind('px-3'), {flex: 8}]}>
        <Text style={[tailwind('font-bold font-12'), dT ? clr.tw : clr.td1s]}>
          DEEPAKRAJAN
        </Text>
      </View>
      <View style={[tailwind('flex-row justify-end'), {flex: 2}]}>
        <LinkIcon dT={dT} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderColor: '#8797B1',
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1.5,
  },
});
