interface TeamPlayersType {
  code: string;
  cap_key: string;
  vc_key: string;
  players: Array<any>;
}

export const filterDiffrentPlayers = (f_1_teams: any, f_2_teams: any) => {
  console.log(f_1_teams);
};

export const totalTeamPoints = (
  team_a: TeamPlayersType,
  team_b: TeamPlayersType,
) => {
  let team_a_points: number = 0;
  let team_b_points: number = 0;

  for (const player of team_a.players) {
    if (player.key !== team_a.cap_key && player.key != team_a.vc_key) {
      team_a_points += player.points;
    } else {
      if (player.key === team_a.cap_key) {
        team_a_points += player.points * 2;
      }
      if (player.key === team_a.vc_key) {
        team_a_points += player.points * 1.5;
      }
    }
  }
  for (const player of team_b.players) {
    if (player.key !== team_b.cap_key && player.key != team_b.vc_key) {
      team_b_points += player.points;
    } else {
      if (player.key === team_b.cap_key) {
        team_b_points += player.points * 2;
      }
      if (player.key === team_b.vc_key) {
        team_b_points += player.points * 1.5;
      }
    }
  }
  return [team_a_points, team_b_points];
};

export const filterExistPlayers = (f_1_players: any, f_2_players: any) => {
  const diffPlayers = [];
  const commanPlayers = [];
  for (const player of f_1_players.players) {
    const isExistinOpTeam = f_2_players.players.find(
      (item: any) => item.key === player.key,
    );
    if (isExistinOpTeam) {
      commanPlayers.push(isExistinOpTeam);
    } else {
      diffPlayers.push(player);
    }
  }

  return {
    diffPlayers,
    commanPlayers,
  };
};

export function diffPlayersByTeam(
  diffPlayers: any,
  selectedPlayerKeys: Array<any>,
  oppPlayerKeys: Array<any>,
) {
  const team_a_diff_players = [];
  const team_b_diff_players = [];
  for (const player of diffPlayers) {
    const isInExistinSelectedTeam = selectedPlayerKeys.find(
      (item: any) => item === player.key,
    );
    if (isInExistinSelectedTeam) {
      const meta = diffPlayers.find(
        (item: any) => item.key === isInExistinSelectedTeam,
      );
      if (meta) {
        team_a_diff_players.push(meta);
      }
    } else {
      team_b_diff_players.push(player);
    }
  }
  return {
    team_a: team_a_diff_players,
    team_b: team_b_diff_players,
  };
}
