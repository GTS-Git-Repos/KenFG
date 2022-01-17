import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import NoContest from './atoms/no.contest';
import {TopBar} from '../../../sharedComponents';
import PagerView from 'react-native-pager-view';
import MyMatchesTabs from './molecules/MyMatchesTabs';
import UpcommingPage from './molecules/UpcommingPage';
import LivePage from './molecules/LivePage';
import CompletedPage from './molecules/CompletedPage';

const log = console.log;

interface PropTypes {
  pagerRef: any;
  upcomming: any;
  live: any;
  completed: any;
}

export default function MyMatches(props: PropTypes) {
  const navigation = useNavigation();
  const pageRef = useRef<any>(null);

  const [selectedTab, setSelectedTab] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setSelectedTab(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'My Matches'} />
      <MyMatchesTabs active={selectedTab} onTabPressed={onTabPressed} />
      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}>
        <View>
          <UpcommingPage upcomming={props.upcomming} />
        </View>
        <View>
          <LivePage />
        </View>
        <View>
          <CompletedPage />
        </View>
      </PagerView>
    </View>
  );
}
