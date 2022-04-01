import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TextInput, StyleSheet} from 'react-native';
import clr from '../../../../constants/colors';
import {AppThemeType} from '../../../../types/app';

interface PropTypes {
  value: any;
  onChangeText: any;
  onBlur: any;
  tm: AppThemeType;
}

export default function InputBox(props: PropTypes) {
  return (
    <View style={[styles.root]}>
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
          style={[
            tailwind('flex-grow font-regular p-0 font-14'),
            props.tm.txt2,
          ]}
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
