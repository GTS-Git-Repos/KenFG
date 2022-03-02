import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopBar} from '../../../../sharedComponents';

interface PropTypes {
  title: string;
}

export default function LoadFailedTeamFormation(props: PropTypes) {
  return (
    <View style={[tailwind('h-full bg-dark justify-between')]}>
      <View style={[tailwind('items-center')]}>
        <Icon name="warning-outline" size={100} color="#BCA04D" />
        <Text style={[tailwind('font-regular text-white font-20')]}>
          Failed to Load
        </Text>
      </View>
      <View></View>
    </View>
  );
}
