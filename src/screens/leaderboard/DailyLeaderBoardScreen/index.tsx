import React, {useRef, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {TopBar} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import Tabs from './atoms/Tabs';
import SelectSeries from './molecules/SelectSeries';
import SeriesHeader from './atoms/SeriesHeader';
import PagerView from 'react-native-pager-view';

import LeaderProfile from './molecules/LeaderProfile';
import SeriesPage from './molecules/SeriesPage';
import WeeklyPage from './molecules/WeeklyPage';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function LeaderBoardScreen() {
  const navigation = useNavigation();
  const pagerRef = useRef();

  const [selectedTab, setSelectedTab] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Daily LeaderBoard'} />
      <Tabs selectedTab={selectedTab} onTabPressed={onTabPressed} />
      {/* <SelectSeries /> */}

      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}>
        <View>
          <SeriesPage showPoints={true} />
        </View>
        <View>
          <SeriesPage showPoints={true} />
        </View>
        <View>
          <SeriesPage showPoints={false} />
        </View>
      </PagerView>
    </View>
  );
}
