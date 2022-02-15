import { useRoute } from '@react-navigation/native';
import React from 'react';
import {usePlayersState} from '../../../shared_hooks/match_hooks';
import ContestLiveMatchScreen from './contest.livematch.screen';

export default function ContestLiveMatchHOC() {
  const route = useRoute()

    // const {players} = usePlayersState();

  return (
    <ContestLiveMatchScreen
      activeTab={0}
      contests={[]}
      teams={[]}
      commentry={[]}
      scoreBoard={[]}
      playerStats={[]}
    />
  );
}
