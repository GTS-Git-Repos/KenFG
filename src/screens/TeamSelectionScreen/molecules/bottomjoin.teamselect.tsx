import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  joinContestWithTeam(): any;
}

export default function BottomSelectTeam(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between p-3')]}>
      <Text style={[tailwind('font-regular font-15 text-white')]}>
        Selected Team:
      </Text>
      <TouchableOpacity
        onPress={props.joinContestWithTeam}
        style={[tailwind('bg-green px-8 py-1 rounded')]}>
        <Text style={[tailwind('font-regular text-white uppercase font-13')]}>
          Join
        </Text>
      </TouchableOpacity>
    </View>
  );
}
