import {covertInputTimeStringToDate} from '../utils/comman';
import {normalizeContests} from './utils.constructor';
import {splitRoleWisePlayersPayload} from './teams.constructor';
import {FLAG_IMG_URL} from '../constants/appContants';
import {UpcommingMatchType} from '../types/app_api';

export const groupAllContestsAPIRmeote = (payload: any) => {
  //  To do need to group contests, by key "group", ['popular','mega']
  try {
    // if no contest found return empty array
    if (payload.length === 0) {
      return [];
    }
    const allContests = normalizeContests(payload);
    // console.log(JSON.stringify(allContests));

    // build a section list for all contests [MARKED AS LATER]
    return allContests;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const parsePrivateContestAPIRemote = (payload: any) => {
  try {
    // if no contest found return empty array
    const contests:any = []
    if (payload.length === 0) {
      return contests
    }
    for(const contest of payload){
      const obj = {...contest};
      const total_spots = parseInt(obj.total_spots);
      //TODO: need API requirement
      obj.filled_spots = 0;
      obj.total_spots = total_spots;
      obj.occupaid_cent = 0
      obj.max_entry = parseInt(obj.max_entry);
      contests.push(obj)
    }   
    return contests
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const extractJoinedContestAPIResponse = (payload: any) => {
  try {
    // extract the contests data, by removing the last index
    const contestsdata = payload.slice(0, payload.length - 1);
    // extract the teams, it alwasy a last index in a array
    const teams = payload[payload.length - 1];

    if (contestsdata.length === 0) {
      throw 'no joined contests';
    }
    const contests = [];
    for (const item of contestsdata) {
      const contestMeta = {...item, contest_team: item.contest_team.split(',')};

      // find the contest joind team and creates a JSON
      const joinedTeam = [];
      for (const team of contestMeta.contest_team) {
        const teamMeta = teams.find((item: any) => item.team_key == team);
        if (teamMeta) {
          const allPlayers = teamMeta.players.players;
          const players = splitRoleWisePlayersPayload(allPlayers);

          const t_cap = allPlayers.find(
            (item: any) => item.key === teamMeta.players.cap_key,
          );
          const t_vc = allPlayers.find(
            (item: any) => item.key === teamMeta.players.vc_key,
          );
          joinedTeam.push({
            teamCode: team,
            t_cap: t_cap,
            t_vc: t_vc,
            team_a: teamMeta.team_a,
            team_b: teamMeta.team_b,
            players,
          });
        }
      }
      contests.push({
        contestMeta,
        joinedTeam,
      });
    }

    return contests;
  } catch (err) {
    console.log('extractJoinedContestAPIResponse', err);
    return false;
  }
};

// used to normalize api response that used in lobby screen need to change the location
export const extractDataFromUpcommingMatchesAPI = (
  payload: any,
): UpcommingMatchType => {
  try {
    // upcomming matches info
    const u_matches = payload.matches;
    const banners = payload.banners;
    // used joined matches info
    const my_matches = payload.my_matches;

    const upcomming = [];
    const myMatches = [];
    for (const u_match of u_matches) {
      const obj = {...u_match};
      obj.start_at = covertInputTimeStringToDate(u_match.teams.start_at);
      // that team code uppercase need to remove, because teamFlag component will handle that
      
      obj.teams.a.a_flag = `${FLAG_IMG_URL}${convertTeamCodeToUppercase(
        u_match.teams.a.key,
      )}.png`;
      obj.teams.b.b_flag = `${FLAG_IMG_URL}${convertTeamCodeToUppercase(
        u_match.teams.b.key,
      )}.png`;

      // delete obj.teams.start_at;
      
      upcomming.push(obj);
    }
    for (const myMatch of my_matches) {
      const obj = {...myMatch};
      obj.start_at = covertInputTimeStringToDate(myMatch.teams.start_at);
      obj.team_count = myMatch.team_count;
      // delete obj.teams.start_at;
      myMatches.push(obj);
    }
    return {upcomming, banners, myMatches};
  } catch (err) {
    console.log('extractDataFromUpcommingMatchesAPI', err);

    return false;
  }
};

export const convertTeamCodeToUppercase = (team_key: string) => {
  return team_key.toUpperCase();
};

export const parseJoinedMatchesAPI = (payload: any) => {
  try {
    const matches = [];
    for (const match of payload) {
      const obj = {...match};
      obj.start_at = covertInputTimeStringToDate(match.teams.start_at);
      matches.push(obj);
    }
    return matches;
  } catch (err) {
    console.log('parseJoinedMatchesAPI', err);
    return false;
  }
};

export function parseContestLeaderBoardAPI(payload: Array<any>) {
  try {
    const teams = [];
    // set is_current to true to the current players
    const currentTeam = payload[0]?.f_player_data;
    if (currentTeam) {
      for (let cteam = 0; cteam < currentTeam.length; cteam++) {
        const team = {...currentTeam[cteam]};
        team.is_current = true;
        teams.push(team);
      }
    } else {
      // it need to handle, when an pagination occured
    }
    const othersTeams = payload[1];
    for (let oteam = 0; oteam < othersTeams.length; oteam++) {
      const team = {...othersTeams[oteam]};
      team.is_current = false;
      teams.push(team);
    }
    return teams;
  } catch (err) {
    console.log('parseContestLeaderBoardAPI Error');
    return false;
  }
}

// used to normalize compare teams api
export const normalizeCompareTeamsRemote = (payload: any) => {
  // if normalize need to do
  return payload;
};
