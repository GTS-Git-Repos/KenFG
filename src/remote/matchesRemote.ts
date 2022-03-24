/**
 * Match related API Calls in here
 */

import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import compareTeamMeta from '../constants/mocks/mockCompareTeam.json';
import {
  MatchScoreFormat,
  normalizeUserTeamsInMatch,
} from '../constructors/match.constructors';
import {parseJoinedTeamsAPI} from '../constructors/teams.constructor';
import {normalizeGetPlayersAPI} from '../constructors/teams.constructor';
import aus_sl_Live from '../assets/mocks/aussl_2022_t20_03_live.json';
import rsa_in_Live from '../assets/mocks/rsaind_2021_test_02_completed.json';
import ban_afg_complete from '../assets/mocks/banafg_2022_t20_01_completed.json';

import {
  extractDataFromUpcommingMatchesAPI,
  extractJoinedContestAPIResponse,
  normalizeCompareTeamsRemote,
} from '../constructors/contest.constructors';

import {
  normalizeMatchUserContets,
  parseJoinedMatchesAPI,
} from '../constructors/match.constructors';

// API Routes
const req_upcomming_mathces_banner = '/upcoming-matches.php';
const req_team_create = '/create-team.php';
const req_view_team = '/view-team.php';
const req_join_contest = '/join-contest.php';
const req_join_contest2 = '/join-contest2.php';

const req_players = '/player-credits.php';

const req_live_match = '/live-match.php';
const req_match_contests = '/my-contest.php';
const req_get_teams = '/get-team.php';

const req_my_contest = '/my-contest.php';
const req_create_contest = '/create-private-contest.php';

const req_matches = '/completed-matches.php';
const req_edit_team = '/edit-team.php';
const req_search_contest = '/search-contest.php';
const req_commentry = '/commentry.php';
const req_match_points = '/match-point.php';

export const upcommingMatchesandBannersRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_upcomming_mathces_banner,
      {player_key: params.queryKey[1], isFullMatch: params.queryKey[2] ? 1 : 0},
    );
    if (response.status === 200) {
      const data = extractDataFromUpcommingMatchesAPI(response.data.data);
      return data;
    } else {
      failedLog('upcommingMatchesandBannersRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// for now use the my contest API, maybe in future the API will change
export const userMatchContestsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_my_contest,
      {
        match_key: params.queryKey[1],
        player_key: params.queryKey[2],
        // isFullMatch: params.queryKey[3] ? 1 : 0,
      },
    );
    if (response.status === 200) {
      return normalizeMatchUserContets(response.data.data);
    }
    throw 'unhandled err';
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const userTeamsInMatchRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_get_teams,
      {
        match_key: params.queryKey[1],
        player_key: params.queryKey[2],
      },
    );
    if (response.status === 200) {
      return normalizeUserTeamsInMatch(response.data.data);
    }
    throw 'unhandled err';
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// the third party API, has scores, innings, players
export const matchScoreStatRemote = async (params: any) => {
  try {
    // console.log(JSON.stringify(MatchScoreFormat(aus_sl_Live)));
    // return MatchScoreFormat(ban_afg_complete);
    // return MatchScoreFormat(aus_sl_Live);
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_live_match,
      {
        match_key: params.queryKey[1],
        mobile: params.queryKey[2],
        data_key: 'all',
      },
    );
    if (response.status === 200) {
      return MatchScoreFormat(response.data.data.data);
    } else {
      failedLog('matchScoreStatRemote()', response);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// get the joined matches
/**
 * used in my matches screen
 */

export const joinedMatchesRemote = async (params: any) => {
  try {
    const response = await requestServer(METHODS.POST, BASE_URL + req_matches, {
      player_key: params.queryKey[1],
      status: params.queryKey[2],
    });
    if (response.status === 200) {
      const matches = parseJoinedMatchesAPI(response.data.data.completed);
      if (!matches) {
        throw 'failed in parse';
      }
      return matches;
    }
    throw 'invalid response';
  } catch (err) {
    console.log('joinedMatchesRemote()', err);
    throw err;
  }
};
// TODO: move that to contest Remote
export const searchContestsRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL +
        `${req_search_contest}?m=${payload.match_key}&s=${payload.input}`,
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      failedLog('searchContestsRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const compareTeamsRemote = async (params: any) => {
  return normalizeCompareTeamsRemote(compareTeamMeta);
};

// TODO: move that to contest Remote
export const createTeamRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_team_create,
      payload,
    );
    if (response.status === 200) {
      return {status: true, data: response.data.data};
    }
    if (response.status === 400) {
      return {status: false, msg: response.data?.message};
    }
    throw new Error('Unhandled Error');
  } catch (err) {
    console.log(err);
    return {status: false, msg: 'Unable to Create a Team'};
  }
};

// TODO: move that to contest Remote
export const editTeamRemote = async (payload: any): Promise<any> => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_edit_team,
      payload,
    );
    console.log('response.status', response.status);
    if (response.status === 200) {
      return {txn: true};
    }
    if (response.status === 400) {
      return {txn: false, msg: 'Team already Exists !'};
    }
    return {txn: false, msg: 'Failed to Edit Team'};
  } catch (err) {
    console.log(err);
    return {txn: false, msg: 'Failed to Edit Team'};
  }
};

// used in team formation screen, to get players for that match
// TODO: move that to contest Remote
export const getMatchPlayersRemote = async (params: any) => {
  try {
    const response = await requestServer(METHODS.POST, BASE_URL + req_players, {
      match_key: params.queryKey[1],
      mobile: params.queryKey[2],
      isFullMatch: params.queryKey[3] ? 1 : 0,
    });
    if (response.status === 200) {
      return normalizeGetPlayersAPI(response.data.data);
    } else {
      failedLog('getMatchPlayersRemote()', response);
    }
  } catch (err) {
    console.log('getMatchPlayersRemote', err);
    throw false;
  }
};

// TODO: move that to contest Remote
export const getCreatedTeamsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_view_team,
      {
        match_key: params.queryKey[1],
        player_key: params.queryKey[2],
        isFullMatch: params.queryKey[3] ? 1 : 0,
      },
    );

    if (response.status === 200 && response.data.data) {
      return parseJoinedTeamsAPI(response.data.data);
    } else {
      failedLog('getCreatedTeamsRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// TODO: move that to contest Remote

export const getJoinedContestRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_my_contest,
      {
        match_key: params.queryKey[1],
        player_key: params.queryKey[2],
        isFullMatch: params.queryKey[3] ? 1 : 0,
      },
    );
    if (response.status === 200) {
      return extractJoinedContestAPIResponse(response.data.data);
    } else {
      failedLog('getJoinedContestRemote()', response);
    }
  } catch (err) {
    console.log('getJoinedContestRemote', err);
    return false;
  }
};

// TODO: move that to contest Remote

export const joinContestRemote = async (payload: any) => {
  console.log('still using join contest 2');
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_join_contest2,
      payload,
    );
    if (response.status === 200) {
      return {txn: true, msg: 'contest joined successfully'};
    }
    if (response.status === 400) {
      return {txn: false, msg: response.data?.message};
    }
    return {txn: false, msg: 'failed to join contest'};
  } catch (err) {
    return {txn: false, msg: 'failed to join contest'};
  }
};

// TODO: move that to contest Remote

export const createContestRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_create_contest,
      payload,
    );
    if (response.status === 200) {
      return true;
    } else {
      failedLog('createContestRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getMatchCommentaryRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_commentry,
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      failedLog('getMatchCommentaryRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// math players points
export const getMatchPlayerPointsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_match_points,
      {
        match_key: params.queryKey[1],
      },
    );
    if (response.status === 200) {
      return response.data.data;
    }
    throw 'getMatchPlayerPointsRemote unhandled error';
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
  );
  throw response;
};
