import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import tailwind from '../../../../tailwind';
import {useRoute} from '@react-navigation/native';
import assets from '../../../constants/assets_manifest';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import MatchGroundTopBar from './atoms/MatchGroundTopar';
import MatchStats from './atoms/MatchStats';
import CategoryPlayers from './blocks/CategoryPlayers';
import {log} from '../../../utils/logs';

interface PropTypes {
  onPressPlayerProfile(player_key: string): any;
}

export default function TeamPreViewScreen(props: PropTypes) {
  const route = useRoute<any>();
  const dT = useSelector(getAppThemeSelector);

  useEffect(() => {
    // log.info(route);
  }, []);

  // return null

  if (route.params.credits_left === 100) {
    return <NoPlayersSelected dT={dT} />;
  }

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <MatchGroundTopBar name={'Your Team'} />

      <MatchStats
        team_a={route.params.team_a}
        team_b={route.params.team_b}
        credits_left={route.params.credits_left}
        dT={dT}
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
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
          <CategoryPlayers
            title={'BATS MEN'}
            players={route.params.batsman}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
            team_a={route.params.team_a.key}
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
          <CategoryPlayers
            title={'ALL ROUNDERS'}
            players={route.params.all_rounder}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
            team_a={route.params.team_a}
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
          <CategoryPlayers
            title={'BOWLERS'}
            players={route.params.bowler}
            cap_key={route.params.cap_key}
            vc_key={route.params.vc_key}
            team_a={route.params.team_a}
            onPressPlayerProfile={props.onPressPlayerProfile}
          />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const NoPlayersSelected = (props: any) => {
  const route = useRoute<any>();
  return (
    <View style={[ss.root, props.dT ? clr.bgd1 : clr.bgw]}>
      <MatchGroundTopBar name={'Your Team'} />

      <MatchStats
        team_a={route.params.team_a}
        team_b={route.params.team_b}
        credits_left={route.params.credits_left}
        dT={props.dT}
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

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
