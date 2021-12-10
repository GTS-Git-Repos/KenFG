import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {upCommingMatchesMock} from '../constants/mockAPIData';
// API Routes

const req_upcomming_mathces_banner = '/upcoming-matches.php';
const req_team_create = '/create-team.php';
const req_view_team = '/view-team.php';
const req_contest_list = '/contests.php';

export const upcommingMatchesandBannersRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_upcomming_mathces_banner,
      {player_key: params.queryKey[1]},
    );
    if (response.status === 200) {
      return response.data.data;
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

export const joinedTeamsRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_view_team,
      {player_key: params.queryKey[1], match_key: params.queryKey[2]},
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      failedLog('joinedTeamsRemote()', response);
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
