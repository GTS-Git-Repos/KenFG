import {createSelector} from 'reselect';
import {rolesConstraints} from '../constants/appContants';
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

export const blockList = createSelector(
  playersState,
  TeamsState,
  (players, teams) => {
    try {
      let blockList: any = [];
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
      const team_a = players.filter(
        (item: any) => item.team_key === teams[0],
      ).length;
      const team_b = players.filter(
        (item: any) => item.team_key === teams[1],
      ).length;

      // Block lisy generation
      if (keeper >= rolesConstraints['keeper'].max) {
        blockList.push('keeper');
      }
      if (batsman >= rolesConstraints['batsman'].max) {
        blockList.push('batsman');
      }
      if (all_rounder >= rolesConstraints['all_rounder'].max) {
        blockList.push('all_rounder');
      }
      if (bowler >= rolesConstraints['bowler'].max) {
        blockList.push('bowler');
      }
      if (team_a >= 7) {
        blockList.push(team_a);
      }
      if (team_b >= 7) {
        blockList.push(team_b);
      }
      return blockList;
    } catch (err) {
      console.log(err);
      return 0;
    }
  },
);

// export const playersCountByTeams = createSelector(
//   playersState,
//   TeamsState,
//   (players, teams) => {
//     const team_a = players.filter((item: any) => item.team_key === teams[0]);
//     const team_b = players.filter((item: any) => item.team_key === teams[1]);

//     return {[teams[0]]: team_a, [teams[1]]: team_b};
//   },
// );

export const allSelecdtedPlayers = createSelector(playersState, players => {
  return players;
});

export const rolesCount = createSelector(
  playersState,
  TeamsState,
  (players, teams) => {
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
    const team_a = players.filter((item: any) => item.team_key === teams[0]);
    const team_b = players.filter((item: any) => item.team_key === teams[1]);

    return {
      keeper: {
        occupaid: keeper,
        min: rolesConstraints['keeper'].min,
        max: rolesConstraints['keeper'].max,
        open_slots: rolesConstraints['keeper'].max - keeper,
        must_need: rolesConstraints['keeper'].min - keeper,
      },
      batsman: {
        occupaid: batsman,
        min: rolesConstraints['batsman'].min,
        max: rolesConstraints['batsman'].max,
        open_slots: rolesConstraints['batsman'].max - batsman,
        must_need: rolesConstraints['batsman'].min - batsman,
      },
      all_rounder: {
        occupaid: all_rounder,
        min: rolesConstraints['all_rounder'].min,
        max: rolesConstraints['all_rounder'].max,
        open_slots: rolesConstraints['all_rounder'].max - all_rounder,
        must_need: rolesConstraints['all_rounder'].min - all_rounder,
      },
      bowler: {
        occupaid: bowler,
        min: rolesConstraints['bowler'].min,
        max: rolesConstraints['bowler'].max,
        open_slots: rolesConstraints['bowler'].max - bowler,
        must_need: rolesConstraints['bowler'].min - bowler,
      },

      [teams[0]]: team_a.length,
      [teams[1]]: team_b.length,
    };
  },
);

export const playersByRole = createSelector(playersState, players => {
  const keeper = players.filter((item: any) => item.seasonal_role === 'keeper');
  const batsman = players.filter(
    (item: any) => item.seasonal_role === 'batsman',
  );
  const all_rounder = players.filter(
    (item: any) => item.seasonal_role === 'all_rounder',
  );
  const bowler = players.filter((item: any) => item.seasonal_role === 'bowler');

  return {
    keeper,
    batsman,
    all_rounder,
    bowler,
  };
});
