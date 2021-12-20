import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  text?: string;
}

export default function PrivacySettings(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MoreScreen')}
      style={[tailwind('mt-3 py-2 flex-row items-center justify-between')]}>
      <Text style={[tailwind('font-bold text-gray-300 font-14')]}>
        Privacy Policy
      </Text>
      <Icon name="chevron-forward-outline" size={20} color="gray" />
    </TouchableOpacity>
  );
}
