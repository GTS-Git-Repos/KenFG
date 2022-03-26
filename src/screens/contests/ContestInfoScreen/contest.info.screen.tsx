import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import tailwind from '../../../../tailwind';
import {
  TopBarContest,
  ContestCard,
  WalletHalfModal,
  CreateTeamButton,
  FullScreenLoading,
} from '../../../sharedComponents';
import Modal from 'react-native-modal';
import {useIsScreenReady, useCountDown} from '../../../shared_hooks/app.hooks';
import {useSharedValue} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

import TabsContestInfo from './atoms/TabsContestInfo';
import WinningsList from './molecules/WiningsList';
import ContestLearderBoard from './molecules/contest.leader.boardList';

import PagerView from 'react-native-pager-view';
import {selectedMatch} from '../../../store/selectors';
import {infoBox} from '../../../utils/snakBars';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

const log = console.log;

interface PropTypes {
  contestInfo: any;
  priceDist: boolean;
  userSelector: any;
  showWalletModal: boolean;
  ldbLive: boolean;
  ldbMeta: Array<any>;
  ldbErr: boolean;
  openWallet(input: boolean): any;
  changePriceDistribution(): any;
  setShowWalletModal(input: boolean): any;
  proceedToJoin(contest_key: string): any;
  lbProfileOnPress(player_key: string, teamCode: string): any;
  teamSwapOnPress(teamCode: string): any;
  onPressCreateTeam(): void;
}

export default function ContestInfoScreen(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const tabOffset = useSharedValue<any>(0);
  const isScreenReady = useIsScreenReady();

  const pageRef: any = useRef(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const matchSelector: any = useSelector(selectedMatch);

  const countDown = useCountDown(matchSelector.start_at);

  // Bussiness logic

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  if (!props.contestInfo || isScreenReady === false) {
    return <FullScreenLoading title={matchSelector.titleString} />;
  }

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      {/* block */}
      <TopBarContest
        title={matchSelector.titleString}
        subtitle={countDown}
        enableNotification={() => {
          infoBox('Notification Preferrence Updated', 0);
        }}
        openWallet={props.openWallet}
        dT={dT}
      />
      <View style={[ss.space]}>
        <ContestCard
          contest_key={props.contestInfo.key}
          match_key={props.contestInfo.match_key}
          title={props.contestInfo.title}
          filled_spots={props?.contestInfo.filled_spots}
          total_spots={props.contestInfo.total_spots}
          occupaid_cent={props.contestInfo.occupaid_cent}
          amount_letters={props.contestInfo.prize.amount_letters}
          amount={props.contestInfo.prize.amount}
          guaranteed={props.contestInfo.guaranteed === 'yes'}
          entry={props.contestInfo.entry}
          max_entry={props.contestInfo.max_entry}
          bonus={props.contestInfo.bonus}
          is_practice={props.contestInfo.is_practice}
          contest_type={props.contestInfo.contest_type}
          proceedToJoin={props.proceedToJoin}
          onContestCardPress={() => {}}
        />
      </View>
      <TabsContestInfo
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
        tabOffset={tabOffset}
        dT={dT}
      />
      {/* end of block */}
      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}>
        <View>
          <WinningsList
            index={0}
            activeIndex={activeIndex}
            data={props.contestInfo.prize.winnings}
            priceDist={props.priceDist}
            changePriceDistribution={props.changePriceDistribution}
          />
        </View>
        <View>
          <ContestLearderBoard
            index={1}
            activeIndex={activeIndex}
            ldbLive={props.ldbLive}
            ldbMeta={props.ldbMeta}
            ldbErr={props.ldbErr}
            lbProfileOnPress={props.lbProfileOnPress}
            teamSwapOnPress={props.teamSwapOnPress}
          />
        </View>
      </PagerView>

      {/* Wallet modal */}
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

      <View style={[ss.cTeamBtn]}>
        <CreateTeamButton onPressCreateTeam={props.onPressCreateTeam} />
      </View>
    </View>
  );
}

/**
 * match_key:
 * contest_key:  [Route params is mandatory]
 */

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  space: {
    paddingTop: 8,
  },
  cTeamBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
