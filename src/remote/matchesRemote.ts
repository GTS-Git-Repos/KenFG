import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {log} from '../utils/logs';
import {normalizeUpcommingMatchesAPI} from '../utils/normalized_api';
// import LiveTestMatchMeta from '../constants/mocks/liveTestMatchMeta.json';
import CompletedTestMatchMeta from '../constants/mocks/completedTestMatch3i.json';

import {liveTestMatchFormat} from '../formatters/livetest.match.formatter';
import {parseJoinedTeamsAPI} from '../formatters/teams.formatter';
import {normalizeGetPlayersAPI} from '../constructors/teams.constructor';
import {
  extractDataFromUpcommingMatchesAPI,
  extractJoinedContestAPIResponse,
  groupAllContestsAPIRmeote,
  parseJoinedMatchesAPI,
} from '../formatters/matchcontest.formatters';

// API Routes
const req_upcomming_mathces_banner = '/upcoming-matches.php';
const req_team_create = '/create-team.php';
const req_view_team = '/view-team.php';
const req_contest_list = '/contests.php';
const req_join_contest = '/join-contest.php';
const req_players = '/fantasy-player.php';
const req_live_match = '/live-match.php';
const req_my_contest = '/my-contest.php';
const req_create_contest = '/create-private-contest.php';
const req_get_private_contest = '/private-contest.php';
const req_matches = '/completed-matches.php';
const req_edit_team = '/edit-team.php';
const req_search_contest = '/search-contest.php';

export const upcommingMatchesandBannersRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_upcomming_mathces_banner,
      {player_key: params.queryKey[1]},
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
    } else {
      throw 'invalid response';
    }
  } catch (err) {
    console.log('joinedMatchesRemote()', err);
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
      return groupAllContestsAPIRmeote(response.data.data);
    } else {
      failedLog('contestsListsRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

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

export const contestInfoRemote = async (params: any) => {
  // DEPRECATED
  console.log('DEPRECATED REMOVED THAT contestInfoRemote');

  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL + `${req_contest_list}?m=${params.queryKey[1]}`,
    );
    if (response.status === 200) {
      const contest = response.data.data.find(
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

export const liveMatchMetaRemote = async (params: any) => {
  try {
    // return liveTestMatchFormat(CompletedTestMatchMeta);
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
      return liveTestMatchFormat(response.data.data.data);
    } else {
      failedLog('liveMatchMetaRemote()', response);
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
      return {status: true, data: response.data.data};
    }
    if (response.status === 400) {
      return {status: false, msg: response.data?.message};
    } else {
      failedLog('createTeamRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const editTeamRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_edit_team,
      payload,
    );
    if (response.status === 200) {
      return true;
    } else {
      failedLog('editTeamRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getMatchPlayersRemote = async (params: any) => {
  try {
    const response = await requestServer(METHODS.POST, BASE_URL + req_players, {
      match_key: params.queryKey[1],
      mobile: params.queryKey[2],
    });
    if (response.status === 200) {
      return normalizeGetPlayersAPI(response.data.data);
    } else {
      failedLog('getMatchPlayersRemote()', response);
    }
  } catch (err) {
    console.log('getMatchPlayersRemote', err);
    return false;
  }
};

export const getJoinedTeamsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_view_team,
      {match_key: params.queryKey[1], player_key: params.queryKey[2]},
    );

    if (response.status === 200 && response.data.data) {
      return parseJoinedTeamsAPI(response.data.data);
    } else {
      failedLog('getJoinedTeamsRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getJoinedContestRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_my_contest,
      {match_key: params.queryKey[1], player_key: params.queryKey[2]},
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

export const joinContestRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_join_contest,
      payload,
    );
    if (response.status === 200) {
      return {status: true};
    } else {
      return {status: false, msg: response.data?.message};
    }
  } catch (err) {
    console.log('joinContestRemote Err', err);
    return {status: false, msg: 'unhandled error'};
  }
};

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

export const getPrivateContestsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.GET,
      BASE_URL +
        `${req_get_private_contest}?m=${params.queryKey[1]}&p=${params.queryKey[2]}`,
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      failedLog('createContestRemote()', response);
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
