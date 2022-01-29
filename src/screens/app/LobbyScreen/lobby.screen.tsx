import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector} from 'react-redux';
import LobbyTopBar from './components/LobbyTopBar';
import LobbyNav from './components/LobbyNav';

import CricketPage from './components/molecules/CricketPage';
import MyMatchCard from './components/molecules/mymatch.card.lobby';
import SubTitle from './components/SubTitle';

import {
  navigateMatchContestsAction,
  toContestLiveMatch,
} from '../../../store/actions/navigationActions';
import {useNavigation} from '@react-navigation/core';

const log = console.log;

interface PropTypes {
  myMatches: any;
  banners: Array<any>;
  upcomming: Array<any>;
}

export default function LobbyScreen(props: PropTypes) {
  const navigation = useNavigation();
  const [cricket, setCricket] = useState(true);

  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  function onPressMyMatchCard(match_key: string) {
    if (props.myMatches.status === 'completed') {
      toContestLiveMatch(navigation, match_key);
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

    console.log(match_key);
  }

  return (
    <View style={tailwind('bg-dark h-full')}>
      <View style={[tailwind('bg-secondary')]}>
        <LobbyTopBar amount={userInfoState.un_utilized} />
        <LobbyNav
          cricket={cricket}
          setCricket={setCricket}
          name={userInfoState?.name}
        />
      </View>

      {cricket ? (
        <View style={[tailwind('px-5 py-4 pb-0.5')]}>
          {props.myMatches && (
            <>
              <SubTitle text={'My Matches'} actiontext="View all" />
              <View style={[tailwind('h-1')]} />
              <MyMatchCard
                match_key={props.myMatches.key}
                team_a={props.myMatches.teams.a}
                team_b={props.myMatches.teams.b}
                tournament_name={props.myMatches.teams.tournament.short_name}
                start_time={props.myMatches.start_at}
                teamCount={props.myMatches.team_count}
                contestCount={props.myMatches.contest_count}
                onPressMyMatchCard={onPressMyMatchCard}
              />
            </>
          )}
        </View>
      ) : null}

      <ScrollView fadingEdgeLength={50}>
        {cricket ? (
          <CricketPage banners={props.banners} upcomming={props.upcomming} />
        ) : (
          <View style={[tailwind('py-10')]}>
            <Text
              style={[
                tailwind('font-semibold text-center uppercase font-17'),
                {color: '#8797B1'},
              ]}>
              Coming Soon ...
            </Text>
          </View>
        )}

        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}
