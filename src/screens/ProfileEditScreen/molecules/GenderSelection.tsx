import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {FemaleIcon, MaleIcon} from '../../../sharedComponents';

interface PropTypes {
  isMale: any;
  setIsMale(value: boolean): any;
}

export default function GenderSelection(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      {/* btn 1 */}
      <TouchableOpacity
        onPress={() => props.setIsMale(true)}
        style={[
          tailwind('flex-row p-2 my-1  rounded items-center'),
          styles.box,
          props.isMale === true && {backgroundColor: '#816D2E99'},
        ]}>
        <MaleIcon />
        <Text style={[tailwind('font-regular text-white px-2 font-14')]}>
          Male
        </Text>
      </TouchableOpacity>

      {/* btn 2 */}
      <View style={[tailwind(''), {flex: 1}]}></View>
      <TouchableOpacity
        onPress={() => props.setIsMale(false)}
        style={[
          tailwind('flex-row border border-gray-400 p-2 rounded items-center'),
          styles.box,
          props.isMale === false && {
            backgroundColor: '#816D2E99',
          },
        ]}>
        <FemaleIcon />
        <Text style={[tailwind('font-regular text-white px-2 font-14')]}>
          Female
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 5.5,
    borderTopColor: '#8797B1',
    borderBottomColor: '#8797B1',
    borderLeftColor: '#8797B1',
    borderRightColor: '#8797B1',
    borderWidth: 1,
  },
});
