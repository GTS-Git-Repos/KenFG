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
import {useSelector} from 'react-redux';
import {creditLeft, playersCountByTeams} from '../../store/selectors';

export default function MathchGroundScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const playersState = useSelector<any>(state => state.team.players);
  const TeamState: any = useSelector<any>(state => state.team.teams);

  const availableCredits = useSelector(creditLeft);
  const playersCount = useSelector(playersCountByTeams);


  return (
    <View style={tailwind('h-full bg-dark-4')}>
      <MatchGroundTopBar name={'Team Name'} />
      <MatchStats
        playersCount={playersCount[TeamState[0]].length + playersCount[TeamState[1]].length}
        teamname1={TeamState[0]}
        teamname2={TeamState[1]}
        teamcount1={playersCount[TeamState[0]].length}
        teamcount2={playersCount[TeamState[1]].length}
        creditsLeft={availableCredits}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={assets.ground}
          style={[tailwind('w-full'), {flexGrow: 1}]}
          resizeMode="cover">
          <CategoryPlayers title={'WICKET-KEEPERS'} players={[1, 2]} />
          <CategoryPlayers title={'BATS MEN'} players={[1, 4, 5]} />
          <CategoryPlayers title={'ALL ROUNDERS'} players={[1, 2]} />
          <CategoryPlayers title={'BOWLERS'} players={[1, 2, 3]} />
        </ImageBackground>
        <Image
          resizeMode="contain"
          source={assets.logo_new}
          style={[
            tailwind('w-20 h-20 absolute right-5 top-10'),
            {opacity: 0.7},
          ]}
        />
        <Image
          resizeMode="contain"
          source={assets.logo_new}
          style={[tailwind('w-20 h-20 absolute left-5 top-10'), {opacity: 0.7}]}
        />
      </ScrollView>
    </View>
  );
}
