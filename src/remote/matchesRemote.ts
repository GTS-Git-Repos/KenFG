import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {normalizeUpcommingMatchesAPI} from '../utils/normalized_api';
// @ts-ignore

import LiveTestMatchMeta from '../constants/mocks/liveTestMatchMeta.json';
import CompletedTestMatchMeta from '../constants/mocks/completedTestMatch3i.json';

import {liveTestMatchFormat} from '../formatters/livetest.match.formatter';
import {
  parseJoinedTeamsAPI,
  splitJoinedTeamsResponse,
} from '../formatters/teams.formatter';
// API Routes

const req_upcomming_mathces_banner = '/upcoming-matches.php';
const req_team_create = '/create-team.php';
const req_view_team = '/view-team.php';
const req_contest_list = '/contests.php';
const req_join_contest = '/join-contest.php';
const req_players = '/fantasy-player.php';
const req_live_match = '/live-match.php';

export const upcommingMatchesandBannersRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_upcomming_mathces_banner,
      {player_key: params.queryKey[1]},
    );
    if (response.status === 200) {
      let matches = normalizeUpcommingMatchesAPI(response.data.data);
      let banners = response.data.data.banners;
      return {matches: matches, banners};
    } else {
      failedLog('upcommingMatchesandBannersRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const contestListsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + `${req_contest_list}?m=${params.queryKey[1]}`,
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      failedLog('contestsListsRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const contestInfoRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + `${req_contest_list}?m=${params.queryKey[1]}`,
    );
    if (response.status === 200) {
      let contest = response.data.data.find(
        (item: any) => item.key === params.queryKey[2],
      );
      if (contest) {
        return contest;
      } else {
        failedLog('No contest Found', '0');
      }
    } else {
      failedLog('contestInfoRemote', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const liveMatchMetaRemote = async (payload: any) => {
  try {
    return liveTestMatchFormat(CompletedTestMatchMeta);
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_live_match,
      {
        match_key: 'rsaind_2021_test_02',
        mobile: '99876543210',
        data_key: 'all',
      },
    );
    if (response.status === 200) {
      return liveTestMatchFormat(response.data.data.data);
    } else {
      failedLog('createTeamRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const createTeamRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_team_create,
      payload,
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      failedLog('createTeamRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getMatchPlayersRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + `${req_players}?match_key=${params.queryKey[1]}`,
    );
    if (response.status === 200) {
      const keeper = response.data.filter(
        (item: any) => item.seasonal_role === 'keeper',
      );
      const batsman = response.data.filter(
        (item: any) => item.seasonal_role === 'batsman',
      );
      const all_rounder = response.data.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      );
      const bowler = response.data.filter(
        (item: any) => item.seasonal_role === 'bowler',
      );
      return [{keeper, batsman, all_rounder, bowler}];
    } else {
      failedLog('getMatchPlayersRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getJoinedTeamsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_view_team,
      {
        player_key: '9876543211',
        match_key: 'sst20_2021_g23',
      },
      // {player_key: params.queryKey[1], match_key: params.queryKey[2]},
    );
    if (response.status === 200) {
      return parseJoinedTeamsAPI(response.data.data);
    } else {
      failedLog('getJoinedTeamsRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const joinContestRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_join_contest,
      payload,
    );
    if (response.status === 200) {
      return response.data?.data;
    } else {
      failedLog('joinContestRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
  );
  throw response;
};
