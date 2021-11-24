import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar, FullScreenLoading} from '../../sharedComponents/';
import {useIsScreenReady} from '../../utils/customHoooks';

import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import FantasyPlayer from './atoms/FantasyPlayer';
import Points from './atoms/Points';
import LinearGradient from 'react-native-linear-gradient';
import Status from './atoms/Status';
import PlayerStats from './molecules/PlayersStats';

const log = console.log;

export default function CompareTeamScreen() {
  const navigation = useNavigation();

  const isScreenReady = useIsScreenReady();

  if (isScreenReady === false) {
    return <FullScreenLoading title={'Compare Teams'} />;
  }

  return (
    <View style={tailwind('bg-dark-4 h-full')}>
      <TopBar text={'Compare Teams'} />
      <ScrollView>
        <LinearGradient
          start={{x: 0.8, y: 1.6}}
          end={{x: 0.0, y: 0.5}}
          locations={[0.6, 0.5]}
          colors={['#1C2B46', '#172338']}>
          <FantasyPlayer
            player1="Fantasy Player"
            player2="The Another Player name"
          />
          <Points />
          <Status />
        </LinearGradient>
        <View style={[tailwind('h-2 bg-dark-4')]}></View>
        <PlayerStats title={'Diffrent Players'} points={150} ahead={false} />
        <View style={[tailwind('h-2 bg-dark-4')]}></View>
        <PlayerStats
          title={'Comman Player with diffrent caps'}
          points={20}
          ahead={true}
        />
      </ScrollView>
    </View>
  );
}
