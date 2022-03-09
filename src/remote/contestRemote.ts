// API calls related to contests

import {parseContestLeaderBoardAPI} from '../constructors/matchcontest.constructors';
import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {groupAllContestsAPIRmeote} from '../constructors/matchcontest.constructors';

const req_edit_contest = '/edit-contest.php';
const req_contest_leaderboard = '/leaderboard.php';
const req_contest_list = '/contests.php';


export const contestListsRemote = async (params: any) => {
  try {
    const {queryKey} = params;
    const URLPATH = `${req_contest_list}?m=${queryKey[1]}&in=${
      queryKey[2] ? 1 : 2
    }`;
    const response = await requestServer(METHODS.GET, BASE_URL + URLPATH);
    if (response.status === 200) {
      return groupAllContestsAPIRmeote(response.data.data);
    }
    // throw error message othan 200 status code
    throw 'failed response';
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const contestleaderBoardRemote = async (params: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_contest_leaderboard,
      {
        match_key: params.queryKey[1],
        contest_key: params.queryKey[2],
        player_key: params.queryKey[3],
      },
    );
    if (response.status === 200) {
      return parseContestLeaderBoardAPI(response.data.data);
    } else {
      failedLog('contestleaderBoardRemote', response);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const switchTeamInContestRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_edit_contest,
      payload,
    );
    if (response.status === 200) {
      return true;
    } else {
      failedLog('switchTeamInContestRemote', response);
    }
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
