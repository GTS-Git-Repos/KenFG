import {creditsLeftCalculator} from '../constructors/teams.constructor';
import {log} from '../utils/logs';

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
