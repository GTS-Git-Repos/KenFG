import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  maxTeam: string;
}

export default function InfoTeamSelection(props: PropTypes) {
  return (
    <View style={[tailwind('p-2 bg-dark-3')]}>
      <Text style={[tailwind('font-regular text-center text-white font-13')]}>
        You can select upto {props.maxTeam} Teams for joining this contest
      </Text>
    </View>
  );
}
