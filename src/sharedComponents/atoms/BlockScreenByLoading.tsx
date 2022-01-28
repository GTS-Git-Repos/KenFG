import React from 'react';
import tailwind from '../../../tailwind';
import {View, Modal, StyleSheet, Text, ActivityIndicator} from 'react-native';

interface PropTypes {
  text?: string;
}

export default function BlockScreenByLoading(props: PropTypes) {
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={[
          tailwind('flex flex-col justify-center'),
          {backgroundColor: 'rgba(0,0,0,0.5)'},
          StyleSheet.absoluteFill,
        ]}>
        <View
          style={[
            tailwind(
              'bg-white mx-7 bg-dark-3 p-5 rounded flex-row items-center',
            ),
          ]}>
          <ActivityIndicator size="large" color="#B2933D" />
          <Text
            style={[
              tailwind('font-regular px-4 text-white text-center font-15'),
            ]}>
            Please Wait...
          </Text>
        </View>
      </View>
    </Modal>
  );
}
