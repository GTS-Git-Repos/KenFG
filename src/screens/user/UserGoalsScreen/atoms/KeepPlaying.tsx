import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function KeepPlaying(props: PropTypes) {
  const width = Dimensions.get('window').width;
  return (
    <View style={[tailwind('bg-dark-3 p-4  rounded'), {width: width / 2}]}>
      <Text
        style={[tailwind('font-regular text-secondary text-center font-11')]}>
        Kepp Playing tu unlock Exciting rewards
      </Text>
    </View>
  );
}
