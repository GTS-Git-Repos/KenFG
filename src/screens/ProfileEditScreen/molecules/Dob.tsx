import React, {useState} from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, StyleSheet, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import assets from '../../../constants/assets_manifest';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {format} from 'date-fns';

interface PropTypes {
  bday: any;
  setBday(val: any): any;
  openDate: boolean;
  setOpenDate(value: boolean): any;
}

export default function Dob(props: PropTypes) {
  const onDateChangedAction = (e: any) => {
    switch (e.type) {
      case 'dismissed':
        props.setOpenDate(false);
        break;
      case 'set':
        // console.log(e.nativeEvent.timestamp);
        props.setBday(e.nativeEvent.timestamp);
        props.setOpenDate(false);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => props.setOpenDate(true)}
        style={[tailwind('flex-row bg-dark-3 items-center'), styles.root]}>
        <Text style={[tailwind('font-regular text-light font-14')]}>
          {format(props.bday, 'dd-MM-yyyy')}
        </Text>
      </TouchableOpacity>

      {props.openDate ? (
        <DateTimePicker
          value={props.bday}
          mode={'date'}
          maximumDate={new Date()}
          display="default"
          onChange={onDateChangedAction}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#8797B14D',
    paddingTop: 3,
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
