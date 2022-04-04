import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import clr from '../../../../constants/colors';
import {ButtonComponent} from '../../../../sharedComponents';

interface PropTypes {
  goTo2ndInnings(match_key: string): void;
  goToLobby(): void;
}

export default function NoMatchContests(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <Text style={[ss.title]}>You haven{"'"}t joined in any contest</Text>
      <ButtonComponent text={'VIEW UPCOMMING PAGE'} />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingTop: 36,
    paddingHorizontal: 57,
  },
  title: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingBottom: 24,
  },
});
