import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {contestListsTypes} from '../types/api';

//@ts-ignore
import contestListJson from '../constants/mocks/contestList.json';
//@ts-ignore
import playersListJson from '../constants/mocks/mockplayersList.json';

// API Routes
const req_upcomming_mathces_banner = '/upcoming-matches.php';

export const upcommingMatchesandBannersRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_upcomming_mathces_banner,
      payload,
    );
    // console.log(response);
    return response;
    if (response.status === 'success') {
      return response.query;
    } else {
      failedLog('initialRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const contestListRemote = async () => {
  try {
    return contestListJson;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const contestInfoRemote = async (params: any) => {
  try {
    const contest = contestListJson.find(
      (item: contestListsTypes) => item.key === params.queryKey[1],
    );
    if (!contest) {
      throw 'not found';
    }
    return contest;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getMatchPlayersRemote = async (params: any) => {
  try {
    const keeper = playersListJson.filter(
      (item: any) => item.seasonal_role === 'keeper',
    );
    const batsman = playersListJson.filter(
      (item: any) => item.seasonal_role === 'batsman',
    );
    const all_rounder = playersListJson.filter(
      (item: any) => item.seasonal_role === 'all_rounder',
    );
    const bowler = playersListJson.filter(
      (item: any) => item.seasonal_role === 'bowler',
    );

    return [{keeper, batsman, all_rounder, bowler}];
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
