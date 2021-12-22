import React, {useEffect, useState} from 'react';
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
import {creditLeft, rolesCount} from '../../store/selectors';

export default function MathchGroundScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [keepers, setKeepers] = useState([]);
  const [batsman, setBastman] = useState([]);
  const [all_rounder, setAll_rounder] = useState([]);
  const [bowler, setBowlers] = useState([]);

  const playersState: any = useSelector<any>(state => state.team.players);
  const TeamState: any = useSelector<any>(state => state.team.teams);

  const availableCredits = useSelector(creditLeft);
  const rolesCountSelector = useSelector(rolesCount);

  useEffect(() => {
    log('rolesCountSelector', rolesCountSelector);
  }, [rolesCountSelector]);

  useEffect(() => {
    const keepers = playersState.filter(
      (item: any) => item.seasonal_role === 'keeper',
    );
    const batsman = playersState.filter(
      (item: any) => item.seasonal_role === 'batsman',
    );
    const all_rounders = playersState.filter(
      (item: any) => item.seasonal_role === 'all_rounder',
    );
    const bowlers = playersState.filter(
      (item: any) => item.seasonal_role === 'bowler',
    );
    setKeepers(keepers);
    console.log(keepers);
    setBastman(batsman);
    setAll_rounder(all_rounders);
    setBowlers(bowlers);
  }, []);

  return (
    <View style={tailwind('h-full bg-dark-4')}>
      <MatchGroundTopBar name={'Your Team'} />
      <MatchStats
        playersCount={
          rolesCountSelector[TeamState[0]] + rolesCountSelector[TeamState[1]]
        }
        teamname1={TeamState[0]}
        teamname2={TeamState[1]}
        teamcount1={rolesCountSelector[TeamState[0]]}
        teamcount2={rolesCountSelector[TeamState[1]]}
        creditsLeft={availableCredits}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={assets.ground}
          style={[tailwind('w-full'), {flexGrow: 1}]}
          resizeMode="cover">
          <CategoryPlayers title={'WICKET-KEEPERS'} players={keepers} />
          <CategoryPlayers title={'BATS MEN'} players={batsman} />
          <CategoryPlayers title={'ALL ROUNDERS'} players={all_rounder} />
          <CategoryPlayers title={'BOWLERS'} players={bowler} />
        </ImageBackground>
        {/* <Image
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
        /> */}
      </ScrollView>
    </View>
  );
}
