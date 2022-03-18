import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {ContestTypeSwitch, TopBar} from '../../../sharedComponents';
import PagerView from 'react-native-pager-view';
import MatchTabPage from './molecules/match.tab.page';
import MyMatchesTabs from './molecules/MyMatchesTabs';
import MatchSwitch from './molecules/match.switch';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
import {useSelector} from 'react-redux';

const log = console.log;

interface PropTypes {
  pagerRef: any;
  matches: any;
  loading: boolean;
  error: boolean;
  isCricket: boolean;
  isFullMatch: boolean;
  setStatus(tabname: string): any;
  onPressMyMatchCard(matche_key: string): any;
  setIsCricket(input: boolean): any;
  onPressMatchType(input: number): any;
}

export default function MyMatches(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

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
    setActiveTabIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    props.pagerRef.current?.setPage(index);
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'My Matches'} />
      <MatchSwitch
        cricketActive={props.isCricket}
        setIsCricket={props.setIsCricket}
      />

      <MyMatchesTabs active={activeTabIndex} onTabPressed={onTabPressed} />
      <View style={[tailwind('flex-row justify-center pt-3 pb-1')]}>
        <ContestTypeSwitch
          onPressMatchType={props.onPressMatchType}
          isFullMatch={props.isFullMatch}
          dT={dT}
        />
      </View>
      <PagerView
        ref={props.pagerRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}>
        <View>
          <MatchTabPage
            index={0}
            activeTabIndex={activeTabIndex}
            errorMsg={"You haven't joined any matches"}
            matches={props.matches}
            loading={props.loading}
            error={props.error}
            onPressMyMatchCard={props.onPressMyMatchCard}
          />
        </View>
        <View>
          <MatchTabPage
            index={1}
            activeTabIndex={activeTabIndex}
            errorMsg={"You haven't joined any contests that are live"}
            matches={props.matches}
            loading={props.loading}
            error={props.error}
            onPressMyMatchCard={props.onPressMyMatchCard}
          />
        </View>
        <View>
          <MatchTabPage
            index={2}
            activeTabIndex={activeTabIndex}
            errorMsg={'You dont have any completed Contest'}
            matches={props.matches}
            loading={props.loading}
            error={props.error}
            onPressMyMatchCard={props.onPressMyMatchCard}
          />
        </View>
      </PagerView>
    </View>
  );
}
