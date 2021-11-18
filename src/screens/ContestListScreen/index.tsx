import React, {useRef} from 'react';
import {View, useWindowDimensions, ScrollView, FlatList} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
const log = console.log;

import TopBarContest from '../../sharedComponents/atoms/TopbarContest';
import Tabs from './molecules/TabsContest';
import ContestPage from './molecules/ContestPage';
import MyContestPage from './molecules/MyContestPage';
import MyTeamsPage from './molecules/MyTeamsPage';

export default function ContestScreen() {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest title={'AUS vs SA'} subtitle={'18h 11m left'} />
      <View style={[tailwind('bg-primary')]}>
        <Tabs />
      </View>
      <ScrollView pagingEnabled horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{width: width}}>
          <ContestPage />
        </View>
        <View style={{width: width}}>
          <MyContestPage />
        </View>
        <View style={{width: width}}>
          <MyTeamsPage />
        </View>
      </ScrollView>
    </View>
  );
}
