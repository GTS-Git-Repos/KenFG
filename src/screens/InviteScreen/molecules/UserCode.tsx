import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function UserCode(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center p-3 mb-4'), styles.border]}>
      <View
        style={[
          tailwind('bg-blue-500 rounded-full'),
          {width: 24, height: 24},
        ]}></View>
      <View style={[tailwind('px-3'), {flex: 8}]}>
        <Text style={[tailwind('font-bold text-light font-12')]}>
          DEEPAKRAJAN
        </Text>
      </View>
      <View style={[tailwind('flex-row justify-end'), {flex: 2}]}>
        <Image
          resizeMode="contain"
          source={assets.link}
          style={[tailwind(''), {width: 20, height: 20}]}
        />
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
