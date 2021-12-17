import React, {useRef} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar, FullScreenLoading} from '../../sharedComponents/';
import {useIsScreenReady} from '../../utils/customHoooks';

import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import SelectTeamSheet from './molecules/SelectTeamSheet';
import FantasyPlayer from './atoms/FantasyPlayer';
import Points from './atoms/Points';
import LinearGradient from 'react-native-linear-gradient';
import Status from './atoms/Status';
import PlayerStats from './molecules/PlayersStats';
import {Modalize} from 'react-native-modalize';
import SelectTeamHeader from './atoms/SelectTeamHeader';
import TopBarCompareTeam from './atoms/TopBarCompareTeam';

const log = console.log;

export default function CompareTeamScreen() {
  const navigation = useNavigation();
  const selectSheet = useRef(null);
  const selectOpponentSheet = useRef(null);

  const isScreenReady = useIsScreenReady();

  if (isScreenReady === false) {
    return <FullScreenLoading title={'Compare Teams'} />;
  }

  return (
    <View style={tailwind('bg-dark-4 h-full')}>
      <TopBarCompareTeam text={'Compare Teams'} />
      <ScrollView>
        <View style={[tailwind('bg-dark-3')]}>
          <FantasyPlayer
            player1="Fantasy Player"
            player2="The Another Player name"
            selectSheet={selectSheet}
            selectOpponentSheet={selectOpponentSheet}
          />
          <Points />
          <Status />
        </View>
        <View style={[tailwind('h-2 bg-dark-4')]}></View>
        <PlayerStats title={'Diffrent Players'} points={150} ahead={false} />
        <View style={[tailwind('h-2 bg-dark-4')]}></View>
        <PlayerStats
          title={'Comman Player with diffrent caps'}
          points={20}
          ahead={true}
        />
      </ScrollView>

      <Modalize
        ref={selectSheet}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        HeaderComponent={() => {
          return <SelectTeamHeader text={'Select Your Team'} />;
        }}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <View style={[tailwind('')]}>
          {['Team1', 'Team2', 'Team3', 'Team4', 'Team5'].map(item => {
            return <SelectTeamSheet name={item} key={item} />;
          })}
        </View>
      </Modalize>

      <Modalize
        ref={selectOpponentSheet}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        HeaderComponent={() => {
          return <SelectTeamHeader text={'Select Opponent Team'} />;
        }}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <View style={[tailwind('')]}>
          {['Team1', 'Team2', 'Team3', 'Team4', 'Team5'].map(item => {
            return <SelectTeamSheet name={item} key={item} />;
          })}
        </View>
      </Modalize>
    </View>
  );
}
