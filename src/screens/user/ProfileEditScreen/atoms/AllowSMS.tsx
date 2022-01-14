import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import Svg, {Circle, Rect} from 'react-native-svg';

interface PropTypes {
  text?: string;
}

export default function AllowSMS(props: PropTypes) {
  return (
    <TouchableOpacity
      style={[tailwind('pt-3 flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-regular text-gray-300 font-14')]}>
        Allow SMS Notifications
      </Text>
      <CustomSwitch />
    </TouchableOpacity>
  );
}

const CustomSwitch = () => {
  return (
    <Svg width="28" height="15" viewBox="0 0 28 15" fill="none">
      <Rect width="28" height="15" rx="7.5" fill="#0D1320" />
      <Circle cx="8" cy="7.5" r="5" fill="#8797B1" />
    </Svg>
  );
};
