/**
 * full page loading spinner
 * used in
 * [1]: MyMatches tab
 * [2]: match screen
 * [3]: match contest screen
 *
 */

import React from 'react';
import tailwind from '../../../tailwind';
import {View, ActivityIndicator} from 'react-native';
import TopBar from './TopBar';

interface PropTypes {
  title: string;
}

export default function PageLoadingSpinner(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopBar text={props.title} />
      <View style={[tailwind('py-3')]}>
        <ActivityIndicator color="#d1b45a" size="large" />
      </View>
    </View>
  );
}
