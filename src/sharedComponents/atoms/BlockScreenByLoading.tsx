/**
 * loading modal with full screen blocking, used lot of places
 */

import React from 'react';
import {View, Modal, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  text?: string;
}

export default function BlockScreenByLoading(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <Modal visible={true} transparent={true}>
      <View style={[ss.root, StyleSheet.absoluteFill]}>
        <View style={[ss.container, dT ? clr.bgd2 : clr.bgw]}>
          <ActivityIndicator size="large" color={dT ? '#B2933D' : '#9C181E'} />
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>Please Wait...</Text>
        </View>
      </View>
    </Modal>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  txt: {
    fontFamily: 'Gadugi-Normal',
    paddingHorizontal: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
  },
});
