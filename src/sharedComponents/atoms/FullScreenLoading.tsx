// used in Account profile screen and ....
// in match screen

import React from 'react';
import {View, Dimensions, StyleSheet, ActivityIndicator} from 'react-native';
import TopBar from '../atoms/TopBar';

interface PropTypes {
  title: string;
}

export default function FullScreenLoading(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <TopBar text={props.title} />
      <View style={[ss.space]}>
        <ActivityIndicator color="#d1b45a" size="large" />
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#0D1320',
  },
  space: {
    paddingVertical: 36,
  },
});
