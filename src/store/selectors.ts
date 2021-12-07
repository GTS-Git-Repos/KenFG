import {createSelector} from 'reselect';

// const LocationState = (state: any): any => state.app.locationState;

const playersState = (state: any) => state.team.players;
const TeamsState = (state: any) => state.team.teams;

export const creditLeft = createSelector(playersState, players => {
  try {
    const usedCredits = players.reduce(
      (prev: number, cur: any) => prev + cur.credits,
      0,
    );
    return 100 - usedCredits;
  } catch (err) {
    console.log(err);
    return 0;
  }
});

export const playersCountByTeams = createSelector(
  playersState,
  TeamsState,
  (players, teams) => {
    // console.log("teams",teams)
    const team_a = players.filter(
      (item: any) => item.nationality_short_code === teams[0],
    );
    const team_b = players.filter(
      (item: any) => item.nationality_short_code === teams[1],
    );
    return {[teams[0]]: team_a, [teams[1]]: team_b};
    // return {team_a};
  },
);
