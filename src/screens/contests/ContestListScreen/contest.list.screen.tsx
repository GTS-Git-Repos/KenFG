import React, {useEffect, useRef, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import {useCountDown} from '../../../utils/customHoooks';
import TopBarContest from '../../../sharedComponents/atoms/TopbarContest';
import {
  BlockScreenByLoading,
  JoinContestModal,
  WalletHalfModal,
} from '../../../sharedComponents';
import TabsContest from './molecules/TabsContest';
import ContestPage from './molecules/ContestPage';
import MyContestPage from './molecules/MyContestPage';
import MyTeamsPage from './molecules/MyTeamsPage';
import {useSelector} from 'react-redux';
import {selectedMatch} from '../../../store/selectors';
import CreateTeamButton from './atoms/CreateTeamButton';
import Modal from 'react-native-modal';
import {TeamFormationMutationType} from '../../../types/match';
import {infoBox} from '../../../utils/snakBars';

const log = console.log;

interface SortTypes {
  max_entry: boolean;
  max_price: boolean;
}

interface PropTypes {
  contests: any;
  contestsAPI: any;
  joined: any;
  joinedAPI: any;
  joinedAPILive: any;
  teams: any;
  teamsAPI: any;
  teamsAPILive: any;
  isFullMatch: boolean;
  pagerRef: any;
  selectedTab: any;
  to: any;
  showJoinModal: any;
  entryAmount: any;
  loading: boolean;
  sortStatus: SortTypes;
  showWalletModal: boolean;
  userSelector: any;
  setShowWalletModal(val: boolean): any;
  setLoading(value: boolean): any;
  proceedToJoin(contest_key: string): any;
  joinContestWithTeam(): any;
  setShowJoinModal(any: boolean): any;
  setSelectedTab(index: number): any;
  teamPreviewPress(team_key: string): any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
  onPressTeamSwitch(team_key: string, contest_key: string): void;
  onPressJoinedContest(contest_key: string): void;
  onPressSecondInnings(): any;
  sortByOnPress(): any;
  openWallet(): any;
}

export default function ContestListScreen(props: PropTypes) {
  const navigation = useNavigation<any>();

  const {width} = useWindowDimensions();

  const [selectedFilter, setSelectedFilter] = useState<any>('All');

  const matchSelector: any = useSelector(selectedMatch);

  const timeStamp = useCountDown(matchSelector.start_at, false);

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

  const navigate = (contest_key: string) => {
    navigation.navigate('ContestInfoScreen', {
      contest_key: contest_key,
    });
  };

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest
        title={matchSelector?.titleString}
        subtitle={timeStamp}
        enableNotification={enableNotification}
        openWallet={props.openWallet}
      />
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
            index={0}
            selectedTab={props.selectedTab}
            isFullMatch={props.isFullMatch}
            onPressSecondInnings={props.onPressSecondInnings}
            sortStatus={props.sortStatus}
            sortByOnPress={props.sortByOnPress}
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
            onPressTeamSwitch={props.onPressTeamSwitch}
            onPressJoinedContest={props.onPressJoinedContest}
            index={1}
            selectedTab={props.selectedTab}
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
            index={2}
            selectedTab={props.selectedTab}
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

      {props.loading && <BlockScreenByLoading />}
    </View>
  );
}

/**
 * match_key is a mandatory params
 */
