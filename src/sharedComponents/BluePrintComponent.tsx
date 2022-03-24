import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  text?: string;
}

export default function BluePrintComponent(props: PropTypes) {

  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[tailwind('box')]}>
      <Text style={[tailwind('font-regular font-15')]}>HEllo</Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {},
});
