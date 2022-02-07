import {differenceBy, intersectionBy, remove} from 'lodash';

interface TeamPlayersType {
  code: string;
  cap_key: string;
  vc_key: string;
  players: Array<any>;
}

interface FilterPlayersType {
  commanPlayers: FilterPlayersType;
  diffPlayers: FilterPlayersType;
}

interface FilterPlayersType {
  points: number;
  srcTeamPlayers: any;
  oppTeamPlayers: any;
}

export const totalTeamPoints = (
  sel_team: TeamPlayersType,
  opp_team: TeamPlayersType,
): Array<number> => {
  let team_a_points = 0;
  let team_b_points = 0;

  for (const player of sel_team.players) {
    if (player.key !== sel_team.cap_key && player.key != sel_team.vc_key) {
      team_a_points += player.points;
    } else {
      if (player.key === sel_team.cap_key) {
        team_a_points += player.points * 2;
      }
      if (player.key === sel_team.vc_key) {
        team_a_points += player.points * 1.5;
      }
    }
  }
  for (const player of opp_team.players) {
    if (player.key !== opp_team.cap_key && player.key != opp_team.vc_key) {
      team_b_points += player.points;
    } else {
      if (player.key === opp_team.cap_key) {
        team_b_points += player.points * 2;
      }
      if (player.key === opp_team.vc_key) {
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
  src_team: any,
  op_team: any,
  srcTeamKeys: Array<string>,
) {
  // console.log('srcTeamKeys', srcTeamKeys);

  const diffPlayers = differenceBy(src_team, op_team, 'key');
  const src_team_players = [];
  const op_team_players = [];

  for (const player of diffPlayers) {
    if (srcTeamKeys.includes(player.key)) {
      src_team_players.push(player);
    } else {
      op_team_players.push(player);
    }
  }
  // console.log('diffPlayers', diffPlayers);

  return diffPlayers;
}

export function extractPlayers(srcTeam: any, OppTeam: any): FilterPlayersType {
  
  const commanPlayers = intersectionBy(srcTeam.players, OppTeam.players, 'key');
  const diffPlayersrcTeam = srcTeam.players.filter((item: any) => {
    const isExists = commanPlayers.find((find_item: any) => {
      find_item.key === item.key;
    });
    if (isExists) {
      return false;
    } else {
      return true;
    }
  });

  const diffPlayerOppTeam = OppTeam.players.filter((item: any) => {
    const isExists = commanPlayers.find((find_item: any) => {
      find_item.key === item.key;
    });
    if (isExists) {
      return false;
    } else {
      return true;
    }
  });

  const commanPlayersPoints = commanPlayers.reduce(
    (prev: number, item: any) => {
      return (prev += item.points);
    },
    0,
  );
  console.log('commanPlayersPoints', commanPlayersPoints);

  return 1;
}
