import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar, ContestCard} from '../../sharedComponents/';
import MatchStat from './atoms/MatchStat';
import Projection from './atoms/Projection';
import Separator from './atoms/Separator';
import CurrentLiveStats from './molecules/CurrentLiveStatus';
import MyContestCard from './molecules/MyContestCard';
// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

export default function LiveMatchScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'IND vs NZ'} />
      <ScrollView>
        <View style={[tailwind('bg-primary px-3 py-7')]}>
          <MatchStat teamName1={'India'} teamName2={'New Zealand'} />
          <Projection />

          <View style={[tailwind('my-2')]}>
            <Separator />
          </View>
          <CurrentLiveStats />
        </View>
        <MyContestCard />
        <MyContestCard />
      </ScrollView>
    </View>
  );
}
