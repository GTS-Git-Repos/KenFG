import {createSelector} from 'reselect';

const playersState = (state: any) => state.players;
const TeamsState = (state: any) => state.teams;

export const creditLeft = createSelector(playersState, players => {
  const usedCredits = players.reduce(
    (prev: number, cur: any) => prev + cur.credits,
    0,
  );
  return 100 - usedCredits;
});

export const playersCountByTeams = createSelector(
  playersState,
  TeamsState,
  (players, teams) => {
    const team_a = players.filter(
      (item: any) => item.nationality_short_code === teams[0],
    );
    const team_b = players.filter(
      (item: any) => item.nationality_short_code === teams[1],
    );
    return {[teams[0]]: team_a, [teams[1]]: team_b};
  },
);
