import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import LeaderBoardBannerSlider from './molecules/LeaderBoardBannerSlider';
import {} from 'react-native-gesture-handler';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function LeaderBoardLisScreen() {
  const dT = useSelector(getAppThemeSelector);
  const navigation = useNavigation();

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Leaderboard Contests'} />
      <ScrollView contentContainerStyle={[tailwind('pb-3')]}>
        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Daily</Text>

        <LeaderBoardBannerSlider type={-1} />
        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Weekly</Text>

        <LeaderBoardBannerSlider type={0} />
        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Monthly</Text>

        <LeaderBoardBannerSlider type={1} />
        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Series</Text>

        <LeaderBoardBannerSlider type={2} />
      </ScrollView>
    </View>
  );
}


// {
//   type: 0 // weekly
//   type: 1 // weekly
// }

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    padding: 16,
    textTransform: 'uppercase',
    // color: TEXTCOLOR,
  },
});
