import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import tailwind from '../../../../tailwind';
import {
  TopbarContest,
  ContestCard,
  WalletHalfModal,
} from '../../../sharedComponents';
import Modal from 'react-native-modal';
import TabsContestInfo from './atoms/TabsContestInfo';
import LearderBoard from './molecules/LeaderBoardList';
import {useIsScreenReady, useCountDown} from '../../../shared_hooks/app.hooks';
import {useSharedValue} from 'react-native-reanimated';
import WinningsList from './molecules/WiningsList';
import CreateTeamButton from './atoms/CreateTeamButton';
import {useSelector} from 'react-redux';
import ContestInfoPageLoading from './atoms/ContestInfoPageLoading';
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
  openWallet(): any;
  changePriceDistribution(): any;
  setShowWalletModal(input: boolean): any;
  proceedToJoin(contest_key: string): any;
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

  // console.log(JSON.stringify(props.leaderBoard));

  if (!props.contestInfo || isScreenReady === false) {
    return <ContestInfoPageLoading title={matchSelector.titleString} />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      {/* block */}
      <TopbarContest
        title={matchSelector.titleString}
        subtitle={countDown}
        enableNotification={() => {
          infoBox('Notification Preferrence Updated', 0);
        }}
        openWallet={props.openWallet}
        dT={dT}
      />
      <View style={[tailwind('pt-2 bg-primary')]}>
        <ContestCard
          navigate={() => {}}
          contest_key={props.contestInfo.key}
          match_key={props.contestInfo.match_key}
          title={props.contestInfo.title}
          filled_spots={props?.contestInfo.filled_spots}
          total_spots={props.contestInfo.total_spots}
          amount_letters={props.contestInfo.prize.amount_letters}
          amount={props.contestInfo.prize.amount}
          guaranteed={props.contestInfo.guaranteed}
          entry={props.contestInfo.entry}
          max_entry={props.contestInfo.max_entry}
          bonus={props.contestInfo.bonus}
          is_practice={props.contestInfo.is_practice}
          contest_type={props.contestInfo.contest_type}
          proceedToJoin={props.proceedToJoin}
        />
      </View>
      <TabsContestInfo
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
        tabOffset={tabOffset}
        tabs={['Winnings', 'LeaderBoard']}
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
          <LearderBoard
            index={1}
            activeIndex={activeIndex}
            ldbLive={props.ldbLive}
            ldbMeta={props.ldbMeta}
            ldbErr={props.ldbErr}
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

      <View
        style={[
          tailwind(
            'absolute bottom-0 w-full flex-row items-center justify-center',
          ),
        ]}>
        <CreateTeamButton />
      </View>
    </View>
  );
}

/**
 * match_key:
 * contest_key:  [Route params is mandatory]
 */
