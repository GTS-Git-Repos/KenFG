import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function AddTeamButton(props: PropTypes) {
  return (
    <View style={[tailwind('w-full absolute bottom-2')]}>
      <View style={[tailwind('flex-row justify-center')]}>
        <TouchableOpacity style={[tailwind('bg-green p-2 rounded')]}>
          <Text style={[tailwind('font-bold uppercase text-white font-11')]}>
            Add to Team
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
