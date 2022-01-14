import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import LeaderBoardBannerSlider from './molecules/LeaderBoardBannerSlider';
import {} from 'react-native-gesture-handler';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function LeaderBoardLisScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Leaderboard Contests'} />
      <ScrollView contentContainerStyle={[tailwind('pb-3')]}>
        <SubTitle text="DAILY" />
        <LeaderBoardBannerSlider type={-1} />
        <SubTitle text="WEEKLY" />
        <LeaderBoardBannerSlider type={0} />
        <SubTitle text="MONTHLY" />
        <LeaderBoardBannerSlider type={1} />
        <SubTitle text="SERIES" />
        <LeaderBoardBannerSlider type={2} />
      </ScrollView>
    </View>
  );
}

const SubTitle = (props: any) => {
  return (
    <View>
      <Text style={[tailwind('font-bold text-white font-14 p-4')]}>
        {props.text}
      </Text>
    </View>
  );
};

// {
//   type: 0 // weekly
//   type: 1 // weekly
// }
