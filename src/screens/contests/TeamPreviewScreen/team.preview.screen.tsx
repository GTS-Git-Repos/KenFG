import React, {useEffect} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
import {useRoute} from '@react-navigation/native';
import assets from '../../../constants/assets_manifest';

import MatchGroundTopBar from './atoms/MatchGroundTopar';
import MatchStats from './atoms/MatchStats';
import CategoryPlayers from './blocks/CategoryPlayers';

export default function TeamPreViewScreen() {
  const route = useRoute<any>();

  useEffect(() => {
    // log.info(route);
  }, []);

  if (route.params.credits_left === 100) {
    return <NoPlayersSelected />;
  }

  return (
    <View style={tailwind('h-full bg-dark-4')}>
      <MatchGroundTopBar name={'Your Team'} />

      <MatchStats
        team_a={route.params.team_a}
        team_b={route.params.team_b}
        credits_left={route.params.credits_left}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={assets.ground}
          style={[tailwind('w-full'), {flexGrow: 1}]}
          resizeMode="cover">
          <CategoryPlayers
            title={'WICKET-KEEPERS'}
            players={route.params.keepers}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
            team_a={route.params.team_a.key}
          />
          <CategoryPlayers
            title={'BATS MEN'}
            players={route.params.batsman}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
            team_a={route.params.team_a.key}
          />
          <CategoryPlayers
            title={'ALL ROUNDERS'}
            players={route.params.all_rounder}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
            team_a={route.params.team_a}
          />
          <CategoryPlayers
            title={'BOWLERS'}
            players={route.params.bowler}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
            team_a={route.params.team_a}
          />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

// *from* route props is mandatory

const NoPlayersSelected = () => {
  const route = useRoute<any>();
  return (
    <View style={tailwind('h-full bg-dark-4')}>
      <MatchGroundTopBar name={'Your Team'} />

      <MatchStats
        team_a={route.params.team_a}
        team_b={route.params.team_b}
        credits_left={route.params.credits_left}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={assets.ground}
          style={[tailwind('w-full'), {flexGrow: 1}]}
          resizeMode="cover">
          <View style={[tailwind('pt-20')]}>
            <Text
              style={[
                tailwind(
                  'font-regular text-center uppercase text-white font-15',
                ),
              ]}>
              No Players Selected
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};
