import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents/';
import {ScrollView} from 'react-native-gesture-handler';
import LeaderProfileCard from './atoms/LeaderProfileCard';
import Header from './atoms/Header';
import StateData from './molecules/StatData';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function LeaderProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'User Stats'} />
      <ScrollView>
        <LeaderProfileCard />
        <Header />
        <StateData points={'423.4'} />
        <StateData points={'223.4'} />
        <StateData points={'563.2'} />
        <StateData points={'423.4'} />
        <StateData points={'223.4'} />
        <StateData points={'563.2'} />
      </ScrollView>
    </View>
  );
}
