import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {FemaleIcon, MaleIcon} from '../../../../sharedComponents';
import {AppThemeType} from '../../../../types/app';

interface PropTypes {
  isMale: any;
  setIsMale(value: boolean): any;
  tm: AppThemeType;
}

export default function GenderSelection(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      {/* btn 1 */}
      <TouchableOpacity
        onPress={() => props.setIsMale(true)}
        style={[
          tailwind('flex-row p-2 my-1 rounded items-center'),
          styles.box,
          props.isMale === true && styles.selectedBox,
        ]}>
        <MaleIcon />
        <Text style={[tailwind('font-regular px-2 font-14'), props.tm.txt2]}>
          Male
        </Text>
      </TouchableOpacity>

      {/* btn 2 */}
      <View style={[tailwind(''), {flex: 1}]}></View>
      <TouchableOpacity
        onPress={() => props.setIsMale(false)}
        style={[styles.box, props.isMale === false && styles.selectedBox]}>
        <FemaleIcon />
        <Text style={[tailwind('font-regular px-2 font-14'), props.tm.txt2]}>
          Female
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 6,
    flex: 5.5,
    borderColor: '#8797B14D',
    borderWidth: 1,
  },
  selectedBox: {
    flex: 5.5,
    borderColor: '#00513B',
    borderWidth: 1,
  },
});
