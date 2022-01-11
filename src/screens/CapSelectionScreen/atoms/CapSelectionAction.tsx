import React from 'react';
import tailwind from '../../../../tailwind';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  navigateToTeamPreviewScreeen(): any;
  saveTeam(): any;
}

export default function CapSelectionAction(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('flex-row items-center justify-center')]}>
      <TouchableOpacity
        onPress={props.navigateToTeamPreviewScreeen}
        style={[
          tailwind('px-5 py-3 flex-row m-2 rounded'),
          {backgroundColor: '#172338', borderTopColor: 'red'},
          styles.teamPreview,
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

const styles = StyleSheet.create({
  teamPreview: {
    borderTopColor: '#006A4D',
    borderLeftColor: '#006A4D',
    borderRightColor: '#006A4D',
    borderBottomColor: '#006A4D',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
