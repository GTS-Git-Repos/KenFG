import React, {useRef, useState} from 'react';
import {View, useWindowDimensions, ScrollView, FlatList} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
const log = console.log;
import {contestListRemote} from '../../remote/serviceRemote';
import {useIsScreenReady} from '../../utils/customHoooks';
import TopBarContest from '../../sharedComponents/atoms/TopbarContest';
import {FullScreenLoading} from '../../sharedComponents';
import Tabs from './molecules/TabsContest';
import ContestPage from './molecules/ContestPage';
import MyContestPage from './molecules/MyContestPage';
import MyTeamsPage from './molecules/MyTeamsPage';
import {useQuery} from 'react-query';

export default function ContestScreen() {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const pagerRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();

  const [selectedTab, setSelectedTab] = useState(0);

  const contests = useQuery('contests', contestListRemote);

  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  if (isScreenReady === false) {
    return <FullScreenLoading title="AUS vs SA" />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest title={'AUS vs SA'} subtitle={'18h 11m left'} />
      <View style={[tailwind('')]}>
        <Tabs selectedTab={selectedTab} onTabPressed={onTabPressed} />
      </View>
      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}
        initialPage={selectedTab}>
        <View style={{width: width}}>
          <ContestPage status={contests.status} data={contests.data} />
        </View>
        <View style={{width: width}}>
          <MyContestPage />
        </View>
        <View style={{width: width}}>
          <MyTeamsPage />
        </View>
      </PagerView>
    </View>
  );
}
