import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents';
import PromobannerLeader from './atoms/PromobannerLeader';
import WeekDays from './molecules/Weekdays';
import SeriesHeader from '../DailyLeaderBoardScreen/atoms/SeriesHeader';
import {ScrollView} from 'react-native-gesture-handler';
import LeaderProfile from '../DailyLeaderBoardScreen/molecules/LeaderProfile';
import MonthDays from './atoms/MonthDays';
import SelectSeries from '../DailyLeaderBoardScreen/molecules/SelectSeries';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function MonthlyLeaderBoardScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();
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
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={title} />
      <PromobannerLeader />
      <View style={[tailwind('px-3')]}>
        {route.params.type === 0 ? <WeekDays /> : null}
        {route.params.type === 1 ? <WeekDays /> : null}
        {route.params.type === 2 ? <SelectSeries /> : null}
      </View>

      <View style={[tailwind('mt-3')]}></View>
      <SeriesHeader />
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={false}
        isThird={false}
        type={route.params?.type}
        showPoints={true}
      />
      <LeaderProfile
        levelStatus={null}
        isFirst={true}
        isSecond={false}
        isThird={false}
        type={route.params?.type}
        showPoints={true}
      />
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={true}
        isThird={false}
        type={route.params?.type}
        showPoints={true}
      />
    </View>
  );
}
