import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  icon: React.ReactNode;
  text: string;
  goto: string;
}

export default function Links(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.goto)}
      activeOpacity={0.6}
      style={[
        tailwind(
          'bg-dark-3 flex-row items-center p-4 border-b border-gray-800',
        ),
      ]}>
      {props.icon}
      <Text style={[tailwind('font-regular text-white px-3 font-13')]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
