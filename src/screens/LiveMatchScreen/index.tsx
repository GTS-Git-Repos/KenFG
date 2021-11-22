import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar, ContestCard, BottomLine} from '../../sharedComponents/';
import MatchStat from './atoms/MatchStat';
import Projection from './atoms/Projection';
import Separator from './atoms/Separator';
import CurrentLiveStats from './molecules/CurrentLiveStatus';
import MyContestCard from './molecules/MyContestCard';
import LinearGradient from 'react-native-linear-gradient';
import LiveMatchSeparator from './atoms/LiveMatchSeparator';
import LiveMatchTabs from './atoms/LiveMatchTabs';
import ScrollBoardPage from './molecules/ScrollBoardPage';

// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

export default function LiveMatchScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'IND vs NZ'} />
      <ScrollView>
        <LinearGradient colors={['#B2933D', '#C5A858']}>
          <View style={[tailwind('px-3 py-7')]}>
            <MatchStat teamName1={'India'} teamName2={'New Zeland'} />
            <Projection />

            <View style={[tailwind('my-2')]}>
              <LiveMatchSeparator />
            </View>
            <CurrentLiveStats />
          </View>
        </LinearGradient>
        <View>
          <LiveMatchTabs />
        </View>
        {/* Pages */}
        <View>
          <ScrollBoardPage />
        </View>
        <View style={[tailwind('h-20')]}></View>
      </ScrollView>
    </View>
  );
}
