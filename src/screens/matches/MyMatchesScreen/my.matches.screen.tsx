import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ContestTypeSwitch, TopBar} from '../../../sharedComponents';
import PagerView from 'react-native-pager-view';
import MyMatchesTabs from './molecules/MyMatchesTabs';
import UpcommingPage from './molecules/UpcommingPage';
import LivePage from './molecules/LivePage';
import CompletedPage from './molecules/CompletedPage';
import MatchSwitch from './molecules/match.switch';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
import {useSelector} from 'react-redux';

const log = console.log;

interface PropTypes {
  pagerRef: any;
  matches: any;
  matchesAPI: any;
  setStatus: any;
  isCricket: boolean;
  isFullMatch: boolean;
  onPressMyMatchCard(matche_key: string): any;
  setIsCricket(input: boolean): any;
  onPressMatchType(input: number): any;
}

export default function MyMatches(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const navigation = useNavigation();
  const pageRef = useRef<any>(null);

  const [selectedTab, setSelectedTab] = useState(0);

  const onPageSelectedAction = (e: any) => {
    const position = e.nativeEvent.position;
    if (position === 0) {
      props.setStatus('notstarted');
    }
    if (position === 1) {
      props.setStatus('started');
    }
    if (position === 2) {
      props.setStatus('completed');
    }
    setSelectedTab(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'My Matches'} />
      <MatchSwitch
        cricketActive={props.isCricket}
        setIsCricket={props.setIsCricket}
      />

      <MyMatchesTabs active={selectedTab} onTabPressed={onTabPressed} />
      <View style={[tailwind('flex-row justify-center pt-3 pb-1')]}>
        <ContestTypeSwitch
          onPressMatchType={props.onPressMatchType}
          isFullMatch={props.isFullMatch}
          dT={dT}
        />
      </View>
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
