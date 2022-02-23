import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {} from 'react-native-gesture-handler';

interface PropTypes {
  notificationSheet: any;
}

export default function MatchNotificationHead(props: PropTypes) {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => props.notificationSheet?.current?.close()}>
        <Icon name="close" size={25} color="white" />
      </TouchableOpacity>
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
