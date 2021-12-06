import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {contestListsTypes} from '../types/api';

//@ts-ignore
import contestListJson from '../constants/mocks/contestList.json';
//@ts-ignore
import playersListJson from '../constants/mocks/mockplayersList.json';

// API Routes
const req_get_all_users = '/init';

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
    return playersListJson;
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
