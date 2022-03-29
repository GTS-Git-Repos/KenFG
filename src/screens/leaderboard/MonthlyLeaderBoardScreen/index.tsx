// used for monthly and weekly for both for now

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../../sharedComponents';
import PromobannerLeader from './atoms/PromobannerLeader';
import WeekDays from './molecules/Weekdays';
import SeriesHeader from '../DailyLeaderBoardScreen/atoms/SeriesHeader';
import LeaderProfile from '../DailyLeaderBoardScreen/molecules/LeaderProfile';
import MonthDays from './atoms/MonthDays';
import SelectSeries from '../DailyLeaderBoardScreen/molecules/SelectSeries';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

const log = console.log;

export default function MonthlyLeaderBoardScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const dT = useSelector(getAppThemeSelector);

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (route.params?.type === 0) {
      setTitle('Weekly Leaderboard');
    }
    if (route.params?.type === 1) {
      setTitle('Montly Leaderboard');
    }
    if (route.params?.type === 2) {
      setTitle('Series Leaderboard');
    }
  }, []);

  return (
    <View style={[tailwind('h-full'), dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={title} />
      <PromobannerLeader />
      <View style={[tailwind('px-3')]}>
        {route.params.type === 0 ? <WeekDays dT={dT} /> : null}
        {route.params.type === 1 ? <MonthDays dT={dT} /> : null}
        {route.params.type === 2 ? <SelectSeries dT={dT} /> : null}
      </View>

      <View style={[tailwind('mt-3')]}></View>
      <SeriesHeader dT={dT} />
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={false}
        isThird={false}
        type={route.params?.type}
        showPoints={true}
        showteams={false}
        dT={dT}
      />
      <LeaderProfile
        levelStatus={null}
        isFirst={true}
        isSecond={false}
        isThird={false}
        type={route.params?.type}
        showPoints={true}
        showteams={false}
        dT={dT}
      />
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={true}
        isThird={false}
        type={route.params?.type}
        showPoints={true}
        showteams={false}
        dT={dT}
      />
    </View>
  );
}

