import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {upCommingMatchesMock} from '../constants/mockAPIData';
// API Routes
const req_get_all_users = '/init';

export const upcomingMatchesRemote = async () => {
  try {
    return upCommingMatchesMock;
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
