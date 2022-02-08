import React from 'react';
import ContestLiveMatchScreen from './contest.livematch.screen';

export default function ContestLiveMatchHOC() {
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
