/**
 *   live match screen, list all the contests and teams of the match
 *  it's possible the user can open that screen without joining any contest, or teams
 *  */

import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useMatchPlayersState} from '../../../shared_hooks/match_hooks';
import MatchScreen from './match.screen';
import {MatchReducer} from './match.controller';
import {toContestMatch} from '../../../navigations/match.links';

export default function MatchScreenHOC() {
  const navigation = useNavigation();
  const route = useRoute();
  const {match_key}: string = route.params;

  function onContestMatchPress(contest_key: string) {
    toContestMatch(navigation, match_key, contest_key);
  }

  return (
    <MatchScreen
      activeTab={0}
      contests={[]}
      teams={[]}
      commentry={[]}
      scoreBoard={[]}
      playerStats={[]}
      onContestMatchPress={onContestMatchPress}
    />
  );
}
