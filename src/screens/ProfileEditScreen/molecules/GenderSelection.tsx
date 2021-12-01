import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  isMale: any;
  setIsMale(value: boolean): any;
}

export default function GenderSelection(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <TouchableOpacity
        onPress={() => props.setIsMale(true)}
        style={[
          tailwind('flex-row border border-gray-400 p-2 rounded items-center'),
          styles.box,
          props.isMale === true && {backgroundColor: '#816D2E'},
        ]}>
        <Icon name="male" size={20} color="#B2933D" />
        <Text style={[tailwind('font-regular text-light px-2 font-15')]}>
          Male
        </Text>
      </TouchableOpacity>
      <View style={[tailwind(''), {flex: 1}]}></View>
      <TouchableOpacity
        onPress={() => props.setIsMale(false)}
        style={[
          tailwind('flex-row border border-gray-400 p-2 rounded items-center'),
          styles.box,
          props.isMale === false && {backgroundColor: '#816D2E'},
        ]}>
        <Icon name="female" size={20} color="#B2933D" />
        <Text style={[tailwind('font-regular text-light px-2 font-15')]}>
          Female
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 5.5,
    borderTopColor: '#816D2E',
    borderBottomColor: '#816D2E',
    borderLeftColor: '#816D2E',
    borderRightColor: '#816D2E',
    borderWidth: 1,
  },
});
