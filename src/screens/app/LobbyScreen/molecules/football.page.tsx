import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  text?: string;
}

export default function FoorBallPage(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[tailwind('py-10 h-full'), {flex: 1}]}>
      <Text
        style={[
          tailwind('font-semibold text-center uppercase font-17'),
          {color: '#8797B1'},
        ]}>
        Coming Soon ...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
});
