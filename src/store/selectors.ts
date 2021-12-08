import {createSelector} from 'reselect';

// const LocationState = (state: any): any => state.app.locationState;

const UserState = (state: any) => state.user.user_info;
const playersState = (state: any) => state.team.players;
const TeamsState = (state: any) => state.team.teams;

export const userInfo = createSelector(UserState, userInfo => {
  return userInfo;
});

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
    const team_a = players.filter((item: any) => item.team_key === teams[0]);
    const team_b = players.filter((item: any) => item.team_key === teams[1]);
    return {[teams[0]]: team_a, [teams[1]]: team_b};
  },
);

export const allPlayers = createSelector(playersState, players => {
  return players;
});

export const rolesCount = createSelector(playersState, players => {
  const keeper = players.filter(
    (item: any) => item.seasonal_role === 'keeper',
  ).length;
  const batsman = players.filter(
    (item: any) => item.seasonal_role === 'batsman',
  ).length;
  const all_rounder = players.filter(
    (item: any) => item.seasonal_role === 'all_rounder',
  ).length;
  const bowler = players.filter(
    (item: any) => item.seasonal_role === 'bowler',
  ).length;
  return {keeper, batsman, all_rounder, bowler};
});
