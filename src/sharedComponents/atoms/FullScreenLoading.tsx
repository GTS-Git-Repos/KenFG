// used in Account profile screen and ....

import React from 'react';
import tailwind from '../../../tailwind';
import {View, Dimensions, ActivityIndicator} from 'react-native';
import TopBar from '../atoms/TopBar';

interface PropTypes {
  title: string;
}

export default function FullScreenLoading(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopBar text={props.title} />
      <View style={[tailwind('py-3')]}>
        <ActivityIndicator color="#d1b45a" size="large" />
      </View>
    </View>
  );
}
