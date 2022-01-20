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
  matches: any;
  matchesAPI: any;
  setStatus: any;
  onPressMyMatchCard(matche_key: string): any;
}

export default function MyMatches(props: PropTypes) {
  const navigation = useNavigation();
  const pageRef = useRef<any>(null);

  const [selectedTab, setSelectedTab] = useState(0);

  const onPageSelectedAction = (e: any) => {
    const position = e.nativeEvent.position;
    setSelectedTab(e.nativeEvent.position);
    if (position === 0) {
      props.setStatus('notstarted');
    }
    if (position === 1) {
      props.setStatus('started');
    }
    if (position === 2) {
      props.setStatus('completed');
    }
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
          <UpcommingPage
            selectedTab={selectedTab}
            matches={props.matches}
            matchesAPI={props.matchesAPI}
            onPressMyMatchCard={props.onPressMyMatchCard}
          />
        </View>
        <View>
          <LivePage
            selectedTab={selectedTab}
            matches={props.matches}
            matchesAPI={props.matchesAPI}
            onPressMyMatchCard={props.onPressMyMatchCard}
          />
        </View>
        <View>
          <CompletedPage
            selectedTab={selectedTab}
            matches={props.matches}
            matchesAPI={props.matchesAPI}
            onPressMyMatchCard={props.onPressMyMatchCard}
          />
        </View>
      </PagerView>
    </View>
  );
}
