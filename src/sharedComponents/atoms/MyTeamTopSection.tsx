import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PropTypes {
  text?: string;
}

export default function MyTeamsTopSection(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row justify-between items-center'),
        {backgroundColor: 'rgba(0,0,0,0.3)'},
      ]}>
      <Text style={[tailwind('font-bold p-3  text-light font-16')]}>
        Team 1 <Text style={[tailwind('font-regular font-15')]}>(Current)</Text>
      </Text>
      <View style={[tailwind('flex-row items-center px-2')]}>
        <TouchableOpacity style={[tailwind('px-2')]}>
          <Icon name="copy-outline" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={[tailwind('px-2')]}>
          <Icon name="build-outline" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
