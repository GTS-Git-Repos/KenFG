/**
 *   live match screen, list all the contests and teams of the match
 *  it's possible the user can open that screen without joining any contest, or teams
 *  */

import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useMatchPlayersState} from '../../../shared_hooks/match_hooks';
import MatchScreen from './match.screen';
import {MatchReducer} from './match.controller';

export default function MatchScreenHOC() {
  const route = useRoute();


  return (
    <MatchScreen
      activeTab={0}
      contests={[]}
      teams={[]}
      commentry={[]}
      scoreBoard={[]}
      playerStats={[]}
    />
  );
}
