import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TextInput, StyleSheet} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  value: any;
  onChangeText: any;
  onBlur: any;
  dT: boolean;
}

export default function InputBox(props: PropTypes) {
  return (
    <View style={[styles.root, props.dT ? clr.bgd2 : clr.bgd2]}>
      <View
        style={[
          {
            flex: 7,
          },
        ]}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          style={[tailwind('flex-grow p-0 text-white font-14')]}
        />
      </View>
      <View style={[tailwind(''), {flex: 3}]}></View>
    </View>
  );
}

export const In = () => {
  return <TextInput style={[tailwind('flex-grow bg-dark-3 text-white')]} />;
};

const styles = StyleSheet.create({
  root: {
    borderBottomColor: '#8797B14D',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
});
