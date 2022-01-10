import React, {useEffect, useState} from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import {useQuery} from 'react-query';

import MatchGroundTopBar from './atoms/MatchGroundTopar';
import MatchStats from './atoms/MatchStats';
import CategoryPlayers from './blocks/CategoryPlayers';
import {log} from '../../utils/logs';
import {useSelector} from 'react-redux';
import {creditLeft, rolesCount} from '../../store/selectors';

export default function MathchGroundScreen() {
  const route = useRoute<any>();

  useEffect(() => {
    // log.info(route);
  }, []);

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
          />
          <CategoryPlayers
            title={'BATS MEN'}
            players={route.params.batsman}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
          />
          <CategoryPlayers
            title={'ALL ROUNDERS'}
            players={route.params.all_rounder}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
          />
          <CategoryPlayers
            title={'BOWLERS'}
            players={route.params.bowler}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
          />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

// *from* route props is mandatory
