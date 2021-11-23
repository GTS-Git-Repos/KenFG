import React, {useRef, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FullScreenLoading} from '../../sharedComponents/';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
const log = console.log;
import TopBarCreateTeam from './atoms/TopBarCreateTeam';
import MatchStatus from './atoms/MatchStatus';
import TeamInfo from './molecules/TeamInfo';
import SelectionIndicator from './atoms/SelectionIndicator';
import Tabs from './atoms/Tabs';

import Line from './atoms/Line';
import BottomAction from './molecules/BottomAction';
import Page from './molecules/Page';

export default function CreateTeamScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const pageRef = useRef();
  const isScreenReady = useIsScreenReady();

  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  if (isScreenReady === false) {
    return <FullScreenLoading title="Loading..." />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarCreateTeam />
      <LinearGradient colors={['#C5A858', '#B2933D']}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#C5A858', '#B2933D']}>
          <MatchStatus text={'MAX 7 PLAYERS FROM A TEAM'} />
          <Line />
          <TeamInfo
            teamname1={'IND'}
            teamname2={'PAK'}
            teamcount1={7}
            teamcount2={4}
            credits_left={2.5}
          />
        </LinearGradient>
        <Line />
        <SelectionIndicator count={8} />
      </LinearGradient>

      {/* Tabs */}
      <View>
        <Tabs activeIndex={activeIndex} onTabPressed={onTabPressed} />
      </View>

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}
        initialPage={0}>
        <View>
          <Page title={'Select 1-2 Wicket Keepers'} />
        </View>
        <View>
          <Page title={'Select 4-3 Bats Man'} />
        </View>
        <View>
          <Page title={'Select 1-3 All Rounders'} />
        </View>
        <View>
          <Page title={'Select 5-3 Bowlers'} />
        </View>
      </PagerView>

      {/* Pages */}

      <BottomAction />
    </View>
  );
}

// start={{x: 0.2, y: 1.1}}
// end={{x: 1, y: 0.1}}
// locations={[0.4, 0]}
// colors={['#C5A858', '#B2933D']}>
