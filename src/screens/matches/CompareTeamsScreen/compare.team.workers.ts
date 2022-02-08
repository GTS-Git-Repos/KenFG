import {differenceBy, groupBy, intersectionBy, remove} from 'lodash';
import {playersByRole} from 'src/store/selectors';
import {CompareTeamType} from '../../../types/compareTeam';

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

export function extractPlayers(srcTeam: any, OppTeam: any): CompareTeamType {
  const extractCommanPlayers = intersectionBy(
    srcTeam.players,
    OppTeam.players,
    'key',
  );

  const commanPlayers = structurePlayers(
    extractCommanPlayers,
    srcTeam.cap_key,
    srcTeam.vc_key,
    OppTeam.cap_key,
    OppTeam.cap_key,
  );
  const commanPlayersScore = playersScoreCal(commanPlayers);

  const extractDiffPlayerSrcTeam = srcTeam.players.filter((item: any) => {
    const isExists = extractCommanPlayers.find(
      (find_item: any) => find_item.key === item.key,
    );
    if (isExists) {
      return false;
    } else {
      return true;
    }
  });

  const extractDiffPlayerOppTeam = OppTeam.players.filter((item: any) => {
    const isExists = extractCommanPlayers.find(
      (find_item: any) => find_item.key === item.key,
    );
    if (isExists) {
      return false;
    } else {
      return true;
    }
  });

  const diffPlayersSrcTeam = structurePlayers(
    extractDiffPlayerSrcTeam,
    srcTeam.cap_key,
    srcTeam.vc_key,
    OppTeam.cap_key,
    OppTeam.vc_key,
  );
  const diffPlayersOppTeam = structurePlayers(
    extractDiffPlayerOppTeam,
    srcTeam.cap_key,
    srcTeam.vc_key,
    OppTeam.cap_key,
    OppTeam.vc_key,
  );
  const DiffPlayersSrcTeamScore = playersScoreCal(diffPlayersSrcTeam);
  const DiffPlayersOppTeamScore = playersScoreCal(diffPlayersOppTeam);

  // console.log('diffPlayersSrcTeam', diffPlayersSrcTeam);

  return {  
    commanPlayers,
    commanPlayersScore,
    diffPlayersSrcTeam,
    diffPlayersOppTeam,
    diffPlayerScore: DiffPlayersSrcTeamScore + DiffPlayersOppTeamScore,
  };
}

function playersScoreCal(players: any): number {
  return players.reduce((prev: number, item: any) => {
    return (prev += item.calc_points);
  }, 0);
}

function structurePlayers(
  players: any,
  src_cap: string,
  src_vc: string,
  opp_cap: string,
  opp_vc: string,
): Array<any> {
  return players.map((item: any) => {
    if (item.key === src_cap || item.key === opp_cap) {
      return {
        ...item,
        cap: true,
        vc: false,
        calc_points: item.points * 2,
      };
    } else if (item.key === src_vc || item.key === opp_vc) {
      return {
        ...item,
        cap: false,
        vc: true,
        calc_points: item.points * 1.5,
      };
    } else {
      return {
        ...item,
        cap: false,
        vc: false,
        calc_points: item.points,
      };
    }
  });
}

export function PlayerRole(team_key: string, role: string) {
  let playerRole = '';
  if (role === 'keeper') {
    playerRole = 'Keep';
  } else if (role === 'batsman') {
    playerRole = 'Bat';
  } else if (role === 'all_rounder') {
    playerRole = 'AR';
  } else {
    playerRole = 'Bowl';
  }
  const teamKey = team_key;
  return `${teamKey.toUpperCase()} ${playerRole}`;
}
