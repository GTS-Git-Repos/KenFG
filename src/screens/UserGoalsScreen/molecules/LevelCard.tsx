import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, useWindowDimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function LevelCard(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View
      style={[
        tailwind('flex-col items-center justify-center'),
        {width: width / 3},
      ]}>
      <Image
        resizeMode="contain"
        source={assets.trophy}
        style={[tailwind(''), {width: 60, height: 50}]}
      />
      <Image
        resizeMode="contain"
        source={assets.level_box}
        style={[tailwind(''), {width: 40, bottom: 10, height: 25}]}
      />
    </View>
  );
}
