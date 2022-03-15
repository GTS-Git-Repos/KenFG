// perform a transformations for get match players api, for ease of use

// used to perform a transformation of get players api in team formation
export const normalizeGetPlayersAPI = (payload: any) => {
  try {
    const keep = [];
    const bat = [];
    const ar = [];
    const bowl = [];

    for (const player of payload) {
      const playerObj = {...player};

      // normalize selected percent data
      // playerObj.sel = playerObj.stat.sel;
      // playerObj.selCap = playerObj.stat.cap;
      // playerObj.selVc = playerObj.stat.vc;

      // mock data
      playerObj.sel = Math.floor(Math.random() * 100);
      playerObj.selCap = Math.floor(Math.random() * 100);
      playerObj.selVc = Math.floor(Math.random() * 100);

      // del the unneeded data
      delete playerObj.stat;

      if (playerObj.seasonal_role === 'keeper') {
        keep.push({
          ...playerObj,
        });
      }
      if (playerObj.seasonal_role === 'batsman') {
        bat.push({
          ...playerObj,
        });
      }
      if (playerObj.seasonal_role === 'all_rounder') {
        ar.push({
          ...playerObj,
        });
      }
      if (playerObj.seasonal_role === 'bowler') {
        bowl.push({
          ...playerObj,
        });
      }
    }
    return [{keeper: keep, batsman: bat, all_rounder: ar, bowler: bowl}];
  } catch (err) {
    console.log('normalizeGetPlayersAPI -->', err);
    return false;
  }
};

// used to perform a transformation of joined contests teams
export const parseJoinedTeamsAPI = (payload: any) => {
  try {
    const teams = payload.teams;

    if (!teams) {
      throw 'No Teams';
    }
    const teamData = [];
    for (const team of teams) {
      const allPlayers = team.players.players;

      const cap = allPlayers.find(
        (item: any) => item.key === team.players.cap_key,
      );
      const vc = allPlayers.find(
        (item: any) => item.key === team.players.vc_key,
      );
      // [major issue, keepers need to change into keeper for maintaining the consistency, need to check is that faulty data used where]

      const {keepers, batsman, all_rounder, bowler} =
        splitRoleWisePlayersPayload(allPlayers);

      const team_a_count = allPlayers.filter(
        (item: any) => item.team_key === team.players.team_a,
      ).length;
      const team_b_count = allPlayers.filter(
        (item: any) => item.team_key === team.players.team_b,
      ).length;
      const credits_left = creditsLeftCalculator(
        keepers,
        batsman,
        all_rounder,
        bowler,
      );
      // console.log('>>>>>>>>>', team);
      teamData.push({
        team_key: team.team_key,
        cap: cap,
        vc: vc,
        keepers,
        batsman,
        all_rounder,
        bowler,
        team_a: {key: team.players.team_a, count: team_a_count},
        team_b: {key: team.players.team_b, count: team_b_count},
        credits_left,
      });
    }
    return teamData;
  } catch (err) {
    console.log('<parseJoinedTeamsAPI>', err);
    return false;
  }
};

export const splitRoleWisePlayersPayload = (players: Array<any>): any => {
  try {
    // keepers change to keeper in future, carefull while changing
    const keepers = players.filter(
      (item: any) => item.seasonal_role === 'keeper',
    );
    const batsman = players.filter(
      (item: any) => item.seasonal_role === 'batsman',
    );
    const all_rounder = players.filter(
      (item: any) => item.seasonal_role === 'all_rounder',
    );
    const bowler = players.filter(
      (item: any) => item.seasonal_role === 'bowler',
    );
    return {
      keepers,
      batsman,
      all_rounder,
      bowler,
    };
  } catch (err) {
    console.log('splitRoleWisePlayersPayload', players);
  }
};

export const creditsLeftCalculator = (
  keepers: Array<any>,
  batsman: Array<any>,
  all_rounder: Array<any>,
  bowler: Array<any>,
) => {
  try {
    const keepersCredits = keepers.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const batsmanCredits = batsman.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const allRounderCredits = all_rounder.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const bowlerCredits = bowler.reduce((pre: any, payload: any) => {
      return pre + payload.credits;
    }, 0);
    const sum =
      keepersCredits + batsmanCredits + allRounderCredits + bowlerCredits;
    return 100 - sum;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
