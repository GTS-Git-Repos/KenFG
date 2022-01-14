import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function AddedTeam(props: PropTypes) {
  return (
    <View style={[tailwind('mx-2 bg-dark-3 rounded p-2')]}>
      <Text style={[tailwind('font-regular text-center text-dark-1 font-12')]}>
        You've not added this player in any team
      </Text>
    </View>
  );
}
