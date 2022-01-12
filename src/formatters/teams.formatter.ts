import {log} from '../utils/logs';

export const parseJoinedTeamsAPI = (payload: Array<any>) => {
  try {
    const teams = payload.teams;
    if (!teams) {
      throw 'No Teams';
    }
    const teamData = [];
    for (let team of teams) {
      const allPlayers = team.players.players;

      const cap = allPlayers.find(
        (item: any) => item.key === team.players.cap_key,
      );
      const vc = allPlayers.find(
        (item: any) => item.key === team.players.vc_key,
      );
      const keepers = allPlayers.filter(
        (item: any) => item.seasonal_role === 'keeper',
      );
      const batsman = allPlayers.filter(
        (item: any) => item.seasonal_role === 'batsman',
      );
      const all_rounder = allPlayers.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      );
      const bowler = allPlayers.filter(
        (item: any) => item.seasonal_role === 'bowler',
      );
      const team_a_count = allPlayers.filter(
        (item: any) => item.team_key === team.players.team_a,
      ).length;
      const team_b_count = allPlayers.filter(
        (item: any) => item.team_key === team.players.team_b,
      ).length;

      teamData.push({
        team_key: team.teams_key,
        cap: cap,
        vc: vc,
        keepers,
        batsman,
        all_rounder,
        bowler,
        team_a: {key: team.players.team_a, count: team_a_count},
        team_b: {key: team.players.team_b, count: team_b_count},
      });
    }
    return teamData;
  } catch (err) {
    console.log('<parseJoinedTeamsAPI>', err);

    return false;
  }
};

