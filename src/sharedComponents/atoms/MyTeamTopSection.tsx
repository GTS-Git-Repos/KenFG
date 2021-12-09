import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PropTypes {
  teams_key: string;
}

export default function MyTeamsTopSection(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row justify-between items-center'),
        {backgroundColor: 'rgba(0,0,0,0.3)'},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-bold p-3 uppercase text-light font-15')]}>
          {props.teams_key}
        </Text>
        <Text style={[tailwind('font-regular text-light font-14')]}>
          (Current)
        </Text>
      </View>

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
