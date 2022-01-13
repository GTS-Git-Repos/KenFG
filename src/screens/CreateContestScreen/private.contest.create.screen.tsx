import React, {useRef, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import CreateContestTopBar from './atoms/CreateContestTopBar';
import TeamsSection from './atoms/TeamsSection';
import CreateContestTabs from './molecules/CreateContestTabs';
import PagerView from 'react-native-pager-view';
import CreateTeamPage from './molecules/CreateTeamPage';
import ShareContestPage from './molecules/ShareContestPage';
import PrivateContestBanner from './atoms/private.contest.banner';
import {useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../store/selectors';
import {Modalize} from 'react-native-modalize';
import AcceptTermsSheet from './atoms/AcceptTermsSheet';
import JoinPrivateContest from './molecules/join.private.contets';
import {useQuery} from 'react-query';
import {getPrivateContestsRemote} from '../../remote/matchesRemote';

const log = console.log;

export default function PrivateContestCreateScreen() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const pageRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canCreateContest, setCanCreateContest] = useState(true);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);

  const contests = useQuery(
    ['privateContests', matchSelector.match_key, userSelector.mobile],
    getPrivateContestsRemote,
  );

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  if (!canCreateContest) {
    return <ContestBannerSection />;
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <CreateContestTopBar />

      <TeamsSection
        team_a={matchSelector.team_a}
        team_b={matchSelector.team_b}
        start_at={''}
        match_name={matchSelector.name}
      />

      <CreateContestTabs
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
      />

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}
        initialPage={0}>
        <View style={[{width: width}]}>
          <CreateTeamPage activeIndex={activeIndex} pageRef={pageRef} contests={contests} />
        </View>
        <View style={[{width: width}]}>
          <ShareContestPage activeIndex={activeIndex} />
        </View>
        <View style={[{width: width}]}>
          <JoinPrivateContest
            activeIndex={activeIndex}
            status={contests.status}
            contests={contests.data}
          />
        </View>
      </PagerView>
    </View>
  );
}

const ContestBannerSection = (props: any) => {
  const termsSheet = useRef(null);

  const matchSelector: any = useSelector(selectedMatch);

  const proceedToCreateContest = () => {
    termsSheet?.current?.open();
  };
  const enableCreateContest = () => {
    termsSheet?.current?.close();
    props.setCanCreateContest(true);
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <CreateContestTopBar />

      <TeamsSection
        team_a={matchSelector.team_a}
        team_b={matchSelector.team_b}
        start_at={''}
        match_name={matchSelector.name}
      />
      <PrivateContestBanner proceedToCreateContest={proceedToCreateContest} />

      <Modalize
        ref={termsSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}>
        <AcceptTermsSheet
          enableCreateContest={enableCreateContest}
          termsSheet={termsSheet}
        />
      </Modalize>
    </View>
  );
};
