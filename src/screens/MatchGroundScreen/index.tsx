import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;
import MatchGroundTopBar from './atoms/MatchGroundTopar';
import MatchStats from './atoms/MatchStats';
import CategoryPlayers from './blocks/CategoryPlayers';

export default function MathchGroundScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <MatchGroundTopBar name={'The Player'} />
      <MatchStats
        playersCount={0}
        teamname1={'IND'}
        teamname2={'AUS'}
        teamcount1={7}
        teamcount2={6}
        creditsLeft={3.5}
      />
      <ScrollView>
        <ImageBackground
          source={assets.ground}
          style={[tailwind('w-full')]}
          resizeMode="cover">
          <CategoryPlayers title={'WICKET-KEEPERS'} players={[1, 2]} />
          <CategoryPlayers title={'BATTERS'} players={[1, 2, 3, 4]} />
          <CategoryPlayers title={'ALL ROUNDERS'} players={[1, 2]} />
          <CategoryPlayers title={'BOWLERS'} players={[1, 2, 3]} />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
