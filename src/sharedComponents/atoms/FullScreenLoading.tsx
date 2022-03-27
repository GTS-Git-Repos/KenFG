// used in Account profile screen and ....
// in match screen
// switch team screen
// team formation screen

import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import TopBar from '../atoms/TopBar';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  title: string;
}

export default function FullScreenLoading(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, !dT && clr.bgw]}>
      <TopBar text={props.title} />
      <View style={[ss.space]}>
        <ActivityIndicator color={dT ? '#d1b45a' : '#9C181E'} size="large" />
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
