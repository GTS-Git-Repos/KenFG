import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {contestListsTypes} from '../types/api';

//@ts-ignore
import contestListJson from '../constants/mocks/contestList.json';
//@ts-ignore
import playersListJson from '../constants/mocks/mockplayersList.json';

// API Routes
const req_test = '/test.php';

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
  );
  throw response;
};
