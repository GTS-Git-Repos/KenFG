import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';

const req_edit_contest = '/edit-contest.php';
const req_contest_leaderboard = '/leaderboard.php';

export const contestleaderBoardRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_contest_leaderboard,
      payload,
    );
    if (response.status === 200) {
      return true;
    } else {
      failedLog('contestleaderBoardRemote', response);
    }
  } catch (err) {
    return false;
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
    //   console.log(err);
    return false;
  }
};

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
  );
  throw response;
};
