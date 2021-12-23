import React from 'react';
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
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function MonthlyLeaderBoardScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={route.params?.name} />
      <PromobannerLeader />
      <View style={[tailwind('px-3')]}>
        {route.params.type === 0 ? <WeekDays /> : <MonthDays />}
      </View>

      <View style={[tailwind('mt-3')]}></View>
      <SeriesHeader />
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={false}
        isThird={false}
      />
      <LeaderProfile
        levelStatus={null}
        isFirst={true}
        isSecond={false}
        isThird={false}
      />
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={true}
        isThird={false}
      />
    </View>
  );
}
