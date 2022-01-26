import React, {useRef, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import CreateContestTopBar from './atoms/CreateContestTopBar';
import CreateContestTabs from './molecules/CreateContestTabs';
import PagerView from 'react-native-pager-view';
import {PrivateContestTeams} from '../../../sharedComponents/';
import CreateTeamPage from './molecules/CreateTeamPage';
import ShareContestPage from './molecules/ShareContestPage';
import PrivateContestBanner from './atoms/private.contest.banner';
import {useSelector} from 'react-redux';
import {selectedMatch} from '../../../store/selectors';
import {Modalize} from 'react-native-modalize';
import AcceptTermsSheet from './atoms/AcceptTermsSheet';
import JoinPrivateContest from './molecules/join.private.contets';
import {useCountDown} from '../../../utils/customHoooks';
const log = console.log;

interface PropTypes {
  contests: any;
  contestsAPI: any;
  contestAPILive: any;
  refetch(): any;
  joinRequestPrivateContest(team_key: string): any;
  onPressContestShare(contest_key: string): any;
  onPressContestCard(contest_key: string): any;
  wallet: string;
}

export default function PrivateContestCreateScreen(props: PropTypes) {
  const {width} = useWindowDimensions();
  const pagerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canCreateContest, setCanCreateContest] = useState(true);

  const matchSelector: any = useSelector(selectedMatch);
  const countDown = useCountDown(matchSelector.start_at, false);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  if (!canCreateContest) {
    return <ContestBannerSection />;
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <CreateContestTopBar wallet={props.wallet} />

      <PrivateContestTeams
        team_a={matchSelector.team_a}
        team_b={matchSelector.team_b}
        start_at={countDown}
        match_name={matchSelector.name}
      />

      <CreateContestTabs
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
      />

      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}
        initialPage={0}>
        <View style={[{width: width}]}>
          <CreateTeamPage
            activeIndex={activeIndex}
            pagerRef={pagerRef}
            refetch={props.refetch}
          />
        </View>
        <View style={[{width: width}]}>
          <ShareContestPage activeIndex={activeIndex} pagerRef={pagerRef} />
        </View>
        <View style={[{width: width}]}>
          <JoinPrivateContest
            activeIndex={activeIndex}
            contests={props.contests}
            contestsAPI={props.contestsAPI}
            contestAPILive={props.contestAPILive}
            joinRequestPrivateContest={props.joinRequestPrivateContest}
            onPressContestCard={props.onPressContestCard}
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
