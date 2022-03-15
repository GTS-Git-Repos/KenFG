import React, {useEffect, useRef, useState} from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import {useCountDown} from '../../../shared_hooks/app.hooks';
import {
  TopBarContest,
  BlockScreenByLoading,
  JoinContestModal,
  WalletHalfModal,
  MatchContestTabs,
  NewJoinContestModal,
} from '../../../sharedComponents';
import {
  ContestPage,
  MyContestPage,
  MyTeamsContestPage,
} from '../../../sharedComponents/';
import {useSelector} from 'react-redux';
import {selectedMatch} from '../../../store/selectors';
import Modal from 'react-native-modal';
import {TeamFormationMutationType} from '../../../types/match';
import {SortStatusType} from '../../../types/contest';
import {infoBox} from '../../../utils/snakBars';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

const log = console.log;

interface PropTypes {
  contests: any;
  ctsLoading: any;
  contestFilters: Array<any>;
  joined: any;
  joinedAPI: any;
  joinedAPILive: any;
  teams: any;
  teamsAPI: any;
  teamsAPILive: any;
  isFullMatch: boolean;
  pagerRef: any;
  selectedTab: any;
  // the prop "to" need to investigate later, need to remove the need
  // to: any;
  // showJoinModal: any;
  // prop that control join contest modal, visible state
  joinModal: boolean;
  entryAmount: any;
  loading: boolean;
  sortStatus: SortStatusType;
  showWalletModal: boolean;
  userSelector: any;
  closeJoinModal(): void;
  filterOnPress(id: string): any;
  onContestCardPress(contest_key: string): any;
  setShowWalletModal(val: boolean): any;
  setLoading(value: boolean): any;
  proceedToJoin(contest_key: string): any;
  joinContestWithTeam(): any;
  // setShowJoinModal(any: boolean): any;
  setSelectedTab(index: number): any;
  teamPreviewPress(team_key: string): any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
  onPressTeamSwitch(team_key: string, contest_key: string): void;
  onPressCreateContest():void
  onPressJoinedContest(contest_key: string): void;
  onPressSecondInnings(): any;
  sortByOnPress(payload: SortStatusType): any;
  openWallet(): any;
  onPressCreateTeam(): any;
}

export default function ContestListScreen(props: PropTypes) {
  const navigation = useNavigation<any>();
  const dT = useSelector(getAppThemeSelector);
  const {width} = useWindowDimensions();

  const matchSelector: any = useSelector(selectedMatch);

  const timeStamp = useCountDown(matchSelector.start_at);

  // Business logic
  const onPageSelectedAction = (e: any) => {
    props.setSelectedTab(e.nativeEvent.position);
  };

  const enableNotification = (e: any) => {
    infoBox('Notification Preferrence Updated', 0);
  };

  const onTabPressed = (index: number) => {
    props.pagerRef.current?.setPage(index);
  };

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBarContest
        dT={dT}
        title={matchSelector?.titleString}
        subtitle={timeStamp}
        enableNotification={enableNotification}
        openWallet={props.openWallet}
      />
      <View>
        <MatchContestTabs
          dT={dT}
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
        {/* list all contests of the match */}
        <View style={{width: width}}>
          <ContestPage
            contests={props.contests}
            contestFilters={props.contestFilters}
            onContestCardPress={props.onContestCardPress}
            contestLoading={props.ctsLoading}
            proceedToJoin={props.proceedToJoin}
            index={0}
            selectedTab={props.selectedTab}
            isFullMatch={true}
            onPressSecondInnings={props.onPressSecondInnings}
            sortStatus={props.sortStatus}
            filterOnPress={props.filterOnPress}
            sortByOnPress={props.sortByOnPress}
            onPressCreateTeam={props.onPressCreateTeam}
            onPressCreateContest={props.onPressCreateContest}
          />
        </View>
        {/* list all the contests that user joined */}
        <View style={{width: width}}>
          <MyContestPage
            index={1}
            joined={props.joined}
            status={props.joinedAPI}
            teamPreviewPress={props.teamPreviewPress}
            teamMutateAction={props.teamMutateAction}
            pagerRef={props.pagerRef}
            onPressTeamSwitch={props.onPressTeamSwitch}
            onPressJoinedContest={props.onPressJoinedContest}
            selectedTab={props.selectedTab}
          />
        </View>
        {/* list all the teams that user created for that match */}
        <View style={{width: width}}>
          <MyTeamsContestPage
            index={2}
            teams={props.teams}
            status={props.teamsAPI}
            live={props.teamsAPILive}
            timeStamp={timeStamp}
            pagerRef={props.pagerRef}
            teamMutateAction={props.teamMutateAction}
            teamPreviewPress={props.teamPreviewPress}
            selectedTab={props.selectedTab}
            onPressCreateTeam={props.onPressCreateTeam}
          />
        </View>
      </PagerView>

      <NewJoinContestModal
        showModal={props.joinModal}
        availableCash={props.userSelector.un_utilized}
        entryAmount={props.entryAmount}
        usableBonus={0}
        closeModal={props.closeJoinModal}
        joinContestWithTeam={props.joinContestWithTeam}
      />

      {/* wallet half modal */}
      <Modal
        style={{
          justifyContent: 'flex-start',
          marginHorizontal: 0,
          marginTop: 50,
        }}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        backdropOpacity={0.7}
        isVisible={props.showWalletModal}
        animationInTiming={500}
        animationOutTiming={500}
        onBackdropPress={() => props.setShowWalletModal(false)}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}>
        <WalletHalfModal
          wallet={props.userSelector.un_utilized}
          unutilised={props.userSelector.un_utilized}
          winnings={props.userSelector.winnings}
          bonus={props.userSelector.bonus}
          setShowWalletModal={props.setShowWalletModal}
        />
      </Modal>
      {/* shown while contests is joining */}
      {props.loading && <BlockScreenByLoading />}
    </View>
  );
}

/**
 * match_key is a mandatory params
 */

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
