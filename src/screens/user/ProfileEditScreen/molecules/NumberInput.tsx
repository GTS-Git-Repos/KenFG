import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TextInput, StyleSheet} from 'react-native';
import {AppThemeType} from '../../../../types/app';

interface PropTypes {
  value: any;
  onChangeText: any;
  onBlur: any;
  tm: AppThemeType;
}

export default function NumberInput(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center'), styles.root]}>
      <View
        style={[
          {
            flex: 7,
          },
        ]}>
        <TextInput
          value={props.value}
          keyboardType="number-pad"
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          style={[tailwind('flex-grow p-0 font-14'), props.tm.txt2]}
        />
      </View>
      <View style={[tailwind(''), {flex: 3}]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8797B14D',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
