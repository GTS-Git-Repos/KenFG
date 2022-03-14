/**
 * loading modal with full screen blocking, used lot of places
 */

import React from 'react';
import {View, Modal, StyleSheet, Text, ActivityIndicator} from 'react-native';

interface PropTypes {
  text?: string;
}

export default function BlockScreenByLoading(props: PropTypes) {

  return (
    <Modal visible={true} transparent={true}>
      <View style={[ss.root, StyleSheet.absoluteFill]}>
        <View style={[ss.container]}>
          <ActivityIndicator size="large" color="#B2933D" />
          <Text style={[ss.txt]}>Please Wait...</Text>
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
    backgroundColor: '#172338',
  },
  txt: {
    fontFamily: 'gadugi-normal',
    paddingHorizontal: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
  },
});
