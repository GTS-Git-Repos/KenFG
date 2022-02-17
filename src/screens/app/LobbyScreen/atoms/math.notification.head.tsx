import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MatchNotificationHead() {
  return (
    <View style={styles.root}>
      <Icon name="close" size={25} color="white" />
      <Text style={[tailwind('font-bold text-white font-14')]}>
        Set Remainders
      </Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#0D1320',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
});
