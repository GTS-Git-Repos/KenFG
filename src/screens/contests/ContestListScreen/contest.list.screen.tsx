import React, {useEffect, useRef, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import tailwind from '../../../../tailwind';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {useCountDown} from '../../../utils/customHoooks';
import TopBarContest from '../../../sharedComponents/atoms/TopbarContest';
import {
  BlockScreenByLoading,
  JoinContestModal,
} from '../../../sharedComponents';
import TabsContest from './molecules/TabsContest';
import ContestPage from './molecules/ContestPage';
import MyContestPage from './molecules/MyContestPage';
import MyTeamsPage from './molecules/MyTeamsPage';
import {useDispatch, useSelector} from 'react-redux';
import {selectedMatch} from '../../../store/selectors';
import CreateTeamButton from './atoms/CreateTeamButton';
import Modal from 'react-native-modal';
import {errorBox} from '../../../utils/snakBars';
import {isMatchTimeExhausted} from '../../../utils/comman';
import {
  navigateWith_AutoJoin,
  toTeamFormationWithAutoJoin,
} from '../../../store/actions/navigationActions';
import {TeamFormationMutationType} from '../../../types/match';

const log = console.log;

interface PropTypes {
  contests: any;
  contestsAPI: any;
  joined: any;
  joinedAPI: any;
  joinedAPILive: any;
  teams: any;
  teamsAPI: any;
  teamsAPILive: any;
  pagerRef: any;
  selectedTab: any;
  to: any;
  showJoinModal: any;
  entryAmount: any;
  loading: boolean;
  setLoading(value: boolean): any;
  proceedToJoin(contest_key: string): any;
  joinContestWithTeam(): any;
  setShowJoinModal(any: boolean): any;
  setSelectedTab(index: number): any;
  teamPreviewPress(team_key: string): any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
}

export default function ContestListScreen(props: PropTypes) {
  const navigation = useNavigation<any>();

  const {width} = useWindowDimensions();

  const [selectedFilter, setSelectedFilter] = useState<any>('All');
  // const [currentTime, setCurrentTime] = useState<any>('00h:00m:00s');

  const matchSelector: any = useSelector(selectedMatch);

  const timeStamp = useCountDown(matchSelector.start_at, false);

  // Business logic
  const onPageSelectedAction = (e: any) => {
    props.setSelectedTab(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    props.pagerRef.current?.setPage(index);
  };

  const navigate = (contest_key: string) => {
    navigation.navigate('ContestInfoScreen', {
      contest_key: contest_key,
    });
  };

  const proceedToJoin = (contest_key: string) => {
    try {
      const contest = props.contests.find(
        (item: any) => item.key === contest_key,
      );
      if (!contest) {
        throw 'no contest found';
      }
      const timeExhausted = isMatchTimeExhausted(matchSelector.start_at);
      if (timeExhausted) {
        errorBox('Time Exhausted', 500);
        return;
      }

      toTeamFormationWithAutoJoin(navigation, props.teams.length, {
        contestKey: contest.key,
        entryAmount: contest.entry,
        maxTeam: contest.max_entry,
      });
    } catch (err) {
      console.log('proceedToJoin', err);
      errorBox('Unhandled Error', 500);
    }
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest title={matchSelector?.titleString} subtitle={timeStamp} />
      <View style={[tailwind('')]}>
        <TabsContest
          selectedTab={props.selectedTab}
          contest_count={props?.joined?.length}
          teamsCount={props?.teams?.length}
          onTabPressed={onTabPressed}
        />
      </View>
      <PagerView
        ref={props.pagerRef}
        onPageSelected={onPageSelectedAction}
        style={[{flex: 1}]}>
        <View style={{width: width}}>
          <ContestPage
            navigate={navigate}
            status={props.contestsAPI}
            data={props.contests}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            proceedToJoin={props.proceedToJoin}
          />
        </View>
        <View style={{width: width}}>
          <MyContestPage
            joined={props.joined}
            status={props.joinedAPI}
            teamPreviewPress={props.teamPreviewPress}
            teamMutateAction={props.teamMutateAction}
            timeStamp={timeStamp}
            pagerRef={props.pagerRef}
          />
        </View>
        <View style={{width: width}}>
          <MyTeamsPage
            teams={props.teams}
            status={props.teamsAPI}
            live={props.teamsAPILive}
            timeStamp={timeStamp}
            pagerRef={props.pagerRef}
            teamMutateAction={props.teamMutateAction}
            teamPreviewPress={props.teamPreviewPress}
          />
        </View>
      </PagerView>

      {props.contests && <CreateTeamButton />}

      <Modal
        isVisible={props.showJoinModal}
        animationInTiming={150}
        animationOutTiming={150}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        scrollHorizontal={true}>
        <JoinContestModal
          setShowJoinModal={props.setShowJoinModal}
          joinContestWithTeam={props.joinContestWithTeam}
          entryAmount={props.entryAmount}
        />
      </Modal>
      {props.loading && <BlockScreenByLoading />}
    </View>
  );
}

/**
 * match_key is a mandatory params
 */
