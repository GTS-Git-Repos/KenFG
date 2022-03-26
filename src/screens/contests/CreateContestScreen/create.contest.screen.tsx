import React, {useRef, useState} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import tailwind from '../../../../tailwind';
import CreateContestTopBar from './atoms/CreateContestTopBar';
import CreateContestTabs from './molecules/CreateContestTabs';
import PagerView from 'react-native-pager-view';
import {PrivateContestTeams} from '../../../sharedComponents/';
import CreateContestPage from './molecules/CreateContestPage';
import ShareContestPage from './molecules/ShareContestPage';
import PrivateContestBanner from './atoms/private.contest.banner';
import {useSelector} from 'react-redux';
import {CreateContestType} from '../../../types/contest';
import {selectedMatch} from '../../../store/selectors';
import {Modalize} from 'react-native-modalize';
import AcceptTermsSheet from './atoms/AcceptTermsSheet';
import JoinPrivateContest from './molecules/join.private.contets';
import {useCountDown} from '../../../shared_hooks/app.hooks';
import ShareContestSheet from './molecules/share.contest.sheet';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

const log = console.log;

export default function PrivateContestCreateScreen(props: CreateContestType) {
  const {width} = useWindowDimensions();
  const pagerRef: any = useRef(null);
  const dT = useSelector(getAppThemeSelector);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canCreateContest, setCanCreateContest] = useState(true);

  const matchSelector: any = useSelector(selectedMatch);
  const countDown = useCountDown(matchSelector.start_at);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pagerRef.current?.setPage(index);
  };

  // will be enabled later
  // if (!canCreateContest) {
  //   return <ContestBannerSection />;
  // }

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <CreateContestTopBar dT={dT} wallet={props.wallet_amount} />

      <PrivateContestTeams
        team_a={matchSelector.team_a}
        team_b={matchSelector.team_b}
        start_at={countDown}
        match_name={matchSelector.name}
        dT={dT}
      />

      <CreateContestTabs
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
        dT={dT}
      />

      <PagerView
        ref={pagerRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}
        initialPage={0}>
        <View style={[{width: width}]}>
          <CreateContestPage
            activeIndex={activeIndex}
            pagerRef={pagerRef}
            refetch={props.refetch}
            dT={dT}
          />
        </View>
        <View style={[{width: width}]}>
          <ShareContestPage
            activeIndex={activeIndex}
            pagerRef={pagerRef}
            userContests={props.userContests}
            selContest={props.selContest}
            onPressContestCard={props.onPressContestCard}
            onPressShareContest={props.onPressShareContest}
            proceedToJoin={props.proceedToJoin}
            isFetching={props.isFetching}
            dT={dT}
          />
        </View>
        <View style={[{width: width}]}>
          <JoinPrivateContest
            activeIndex={activeIndex}
            allContests={props.allContests}
            onPressContestCard={props.onPressContestCard}
            proceedToJoin={props.proceedToJoin}
            dT={dT}
          />
        </View>
      </PagerView>

      {/* share contest bottom sheet */}
      <Modalize
        ref={props.shareSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}>
        <ShareContestSheet
          contest_code={props.selContest?.key}
          onPressCopy={props.onPressCopy}
          onPressSMSShare={props.onPressSMSShare}
          onPressMoreShare={props.onPressMoreShare}
          dT={dT}
        />
      </Modalize>
    </View>
  );
}

// const ContestBannerSection = (props: any) => {
//   const termsSheet = useRef(null);

//   const matchSelector: any = useSelector(selectedMatch);

//   const proceedToCreateContest = () => {
//     termsSheet?.current?.open();
//   };
//   const enableCreateContest = () => {
//     termsSheet?.current?.close();
//     props.setCanCreateContest(true);
//   };

//   return (
//     <View style={tailwind('h-full bg-dark')}>
//       <CreateContestTopBar wallet={props.wallet} />

//       <TeamsSection
//         team_a={matchSelector.team_a}
//         team_b={matchSelector.team_b}
//         start_at={''}
//         match_name={matchSelector.name}
//       />
//       <PrivateContestBanner proceedToCreateContest={proceedToCreateContest} />

//       <Modalize
//         ref={termsSheet}
//         useNativeDriver={true}
//         modalTopOffset={100}
//         adjustToContentHeight={true}>
//         <AcceptTermsSheet
//           enableCreateContest={enableCreateContest}
//           termsSheet={termsSheet}
//         />
//       </Modalize>
//     </View>
//   );
// };

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
