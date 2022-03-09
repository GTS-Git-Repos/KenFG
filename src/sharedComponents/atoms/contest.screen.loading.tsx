// contests loading screen state, used in contest list screen and second innings contests lists
import React from 'react';
import tailwind from '../../../tailwind';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import TopBarContest from './topbar.contest';
import {getAppThemeSelector, selectedMatch} from '../../store/selectors';
import clr from '../../constants/colors';


export default function ContestScreenLoading(props: PropTypes) {
  const match: any = useSelector(selectedMatch);
  const dT = useSelector(getAppThemeSelector);  

  return (
    <View style={[ss.root, tailwind('bg-dark-4')]}>
      <TopBarContest
        dT={dT}
        title={match.titleString}
        subtitle={'00h:00m'}
        enableNotification={() => {}}
        openWallet={() => {}}
      />
      <View style={[ss.space]}>
        <ActivityIndicator size="large" color="#C5A858" />
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  space: {
    paddingVertical: 60,
  },
});
