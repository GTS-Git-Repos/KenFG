import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';

//@ts-ignore
import contestListJson from '../constants/mocks/contestList.json';
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

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
  );
  throw response;
};
