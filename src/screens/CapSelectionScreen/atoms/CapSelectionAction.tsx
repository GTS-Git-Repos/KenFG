import React from 'react';
import tailwind from '../../../../tailwind';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  saveTeam(): any;
}

export default function CapSelectionAction(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('flex-row items-center justify-center')]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MatchGroundScreen')}
        style={[
          tailwind('flex-row  m-2 rounded px-8 py-3'),
          {backgroundColor: '#3A2B13'},
        ]}>
        <Text style={[tailwind('font-bold uppercase text-light font-12')]}>
          Team Preview
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.saveTeam}
        style={[
          tailwind('px-8 py-3 flex-row  m-2 rounded'),
          {backgroundColor: '#00513B'},
        ]}>
        <Text style={[tailwind('font-bold uppercase text-light font-12')]}>
          Save Team
        </Text>
      </TouchableOpacity>
    </View>
  );
}
