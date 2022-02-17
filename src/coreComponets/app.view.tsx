import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PropTypes {
  children: React.ReactElement;
}

export default function AppView({children}: any) {
  return (
    <View style={{backgroundColor: 'red', padding: 10}}>
      <Text>Hello from app view</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
});
