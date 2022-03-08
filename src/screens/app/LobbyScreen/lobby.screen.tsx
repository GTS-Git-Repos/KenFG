import React, {useRef, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector} from 'react-redux';
import LobbyTopBar from './atoms/lobby.top.bar';
import LobbyNav from './atoms/lobby.nav';
import CricketPage from './molecules/cricket.page';
import FootBallPage from './molecules/football.page';
import MyMatchCard from './molecules/mymatch.card.lobby';
import SubTitle from './atoms/lobby.subtitle';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import {
  navigateMatchContestsAction,
  toMatch,
} from '../../../store/actions/navigationActions';
import {useNavigation} from '@react-navigation/core';

const log = console.log;

interface PropTypes {
  myMatches: any;
  banners: Array<any>;
  upcomming: Array<any>;
  isFullMatch: boolean;
  appColors: any;
  onPressMatchType(match_type: number): void;
  onPressNotification(match_key: string): void;
}

export default function LobbyScreen(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  const navigation = useNavigation();
  const [cricket, setCricket] = useState(true);
  const notificationSheet = useRef();

  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  function onPressMyMatchCard(match_key: string) {
    toMatch(navigation, 'iccwwc_2022_g2');
    return;

    if (props.myMatches.status === 'completed') {
      toMatch(navigation, match_key);
    } else {
      const obj = {
        match_key: match_key,
        name: props.myMatches.teams.tournament.short_name,
        team_a: props.myMatches.teams.a.key,
        team_b: props.myMatches.teams.b.key,
        team_a_name: props.myMatches.teams.a.name,
        team_b_name: props.myMatches.teams.b.name,
        start_at: props.myMatches.start_at,
      };
      navigateMatchContestsAction(navigation, obj);
    }
  }

  return (
    <View style={[styles.root, dT ? clr.bgd1 : clr.bgGray, {flex: 1}]}>
      <LobbyTopBar
        appColors={props.appColors}
        amount={userInfoState.un_utilized}
      />
      <LobbyNav
        cricket={cricket}
        setCricket={setCricket}
        name={userInfoState?.name}
      />

      {cricket && props.myMatches ? (
        <View style={[styles.myMatchContainer]}>
          <SubTitle dT={dT} text={'My Matches'} actiontext="View all" />
          <MyMatchCard
            match_key={props.myMatches.key}
            team_a={props.myMatches.teams.a}
            status={props.myMatches.status}
            team_b={props.myMatches.teams.b}
            tournament_name={props.myMatches.teams.tournament.short_name}
            start_time={props.myMatches.start_at}
            teamCount={props.myMatches.team_count}
            contestCount={props.myMatches.contest_count}
            onPressMyMatchCard={onPressMyMatchCard}
          />
        </View>
      ) : null}

      <ScrollView>
        {cricket ? (
          <CricketPage
            banners={props.banners}
            upcomming={props.upcomming}
            isFullMatch={props.isFullMatch}
            onPressMatchType={props.onPressMatchType}
            notificationSheet={notificationSheet}
            onPressNotification={props.onPressNotification}
          />
        ) : (
          <FootBallPage />
        )}
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  myMatchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
});
