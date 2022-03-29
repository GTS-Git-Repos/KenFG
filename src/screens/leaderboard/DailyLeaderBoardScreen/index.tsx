import React, {useRef, useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
import {TopBar} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import Tabs from './atoms/Tabs';
import PagerView from 'react-native-pager-view';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import SeriesPage from './molecules/SeriesPage';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function LeaderBoardScreen() {
  const navigation = useNavigation();
  const pagerRef = useRef<any>();
  const dT = useSelector(getAppThemeSelector);

  const [selectedTab, setSelectedTab] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgGray]}>
      <TopBar text={'Daily LeaderBoard'} />
      <Tabs selectedTab={selectedTab} onTabPressed={onTabPressed} dT={dT} />
      {/* <SelectSeries /> */}

      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}>
        <View>
          <SeriesPage dT={dT} showPoints={true} />
        </View>
        <View>
          <SeriesPage dT={dT} showPoints={true} />
        </View>
        <View>
          <SeriesPage dT={dT} showPoints={false} />
        </View>
      </PagerView>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
