import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function BreakupSheetHeader(props: PropTypes) {
  return (
    <LinearGradient
      colors={['#BCA04D', '#D8C872']}
      style={[
        tailwind('p-3 rounded-t-xl flex-row items-center justify-between'),
      ]}>
      <Icon name="close-outline" size={24} color="#614920" />
      <View>
        <Text style={[tailwind('font-bold text-brown-5 font-16 text-center')]}>
          Detailed Breakup
        </Text>
        <Text
          style={[tailwind('font-regular text-brown-3 text-center font-12')]}>
          AUS vs ENG
        </Text>
      </View>
      <View style={[tailwind('w-4')]}></View>
    </LinearGradient>
  );
}
