import React, {useState, useRef, useEffect} from 'react';
import {View} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TopbarContest, ContestCard} from '../../../sharedComponents';
import TabsContestInfo from './atoms/TabsContestInfo';
import {useQuery} from 'react-query';
const log = console.log;
import LearderBoard from './molecules/LeaderBoardList';
import {useCountDown, useIsScreenReady} from '../../../utils/customHoooks';
import {contestListsRemote} from '../../../remote/matchesRemote';
import {useSharedValue} from 'react-native-reanimated';
import WinningsList from './molecules/WiningsList';
import CreateTeamButton from './atoms/CreateTeamButton';
import {useSelector} from 'react-redux';
import ContestInfoPageLoading from './atoms/ContestInfoPageLoading';
import PagerView from 'react-native-pager-view';
import {selectedMatch} from '../../../store/selectors';
import {navigateWith_AutoJoin} from '../../../store/actions/navigationActions';

interface PropTypes {
  priceDist: boolean;
  changePriceDistribution(): any;
}

export default function ContestInfoScreen(props: PropTypes) {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const tabOffset = useSharedValue<any>(0);
  const isScreenReady = useIsScreenReady();

  const pageRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [contestInfo, setContestInfo]: any = useState(null);

  const matchSelector: any = useSelector(selectedMatch);

  const countDown = useCountDown(matchSelector.start_at, false);

  const {data} = useQuery(
    ['contests', matchSelector.match_key],
    contestListsRemote,
    {staleTime: 8000},
  );

  useEffect(() => {
    if (data) {
      const contest = data.find(
        (item: any) => item.key === route.params.contest_key,
      );
      contest ? setContestInfo(contest) : null;
    }
  }, [data]);

  // Bussiness logic

  const proceedToJoin = () => {
    navigateWith_AutoJoin(navigation, 0, {
      contestKey: contestInfo.key,
      entryAmount: contestInfo.entry,
      maxTeam: contestInfo.max_entry,
    });
  };

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  if (!contestInfo || isScreenReady === false) {
    return <ContestInfoPageLoading title={matchSelector.titleString} />;
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopbarContest
        title={matchSelector.titleString}
        subtitle={countDown}
        enableNotification={function (e: any): void {
          throw new Error('Function not implemented.');
        }}
        openWallet={function (e: any): void {
          throw new Error('Function not implemented.');
        }}
      />
      <View style={[tailwind('pt-2 bg-primary')]}>
        <ContestCard
          navigate={() => {}}
          contest_key={contestInfo.key}
          match_key={contestInfo.match_key}
          title={contestInfo.title}
          total_joined={30}
          total_spots={contestInfo.total_spots}
          amount_letters={contestInfo.prize.amount_letters}
          amount={contestInfo.prize.amount}
          guaranteed={contestInfo.guaranteed}
          entry={contestInfo.entry}
          max_entry={contestInfo.max_entry}
          bonus={contestInfo.bonus}
          is_practice={contestInfo.is_practice}
          contest_type={contestInfo.contest_type}
          proceedToJoin={proceedToJoin}
        />
      </View>
      <TabsContestInfo
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
        tabOffset={tabOffset}
        tabs={['Winnings', 'LeaderBoard']}
      />

      <PagerView
        ref={pageRef}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}>
        <View>
          <WinningsList
            index={0}
            activeIndex={activeIndex}
            data={contestInfo.prize.winnings}
            priceDist={props.priceDist}
            changePriceDistribution={props.changePriceDistribution}
          />
        </View>
        <View>
          <LearderBoard index={1} activeIndex={activeIndex} />
        </View>
      </PagerView>

      {/* Wallet modal */}
      {/* <Modal
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
      </Modal> */}

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
