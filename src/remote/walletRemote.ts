// The API calls related to wallet cash flow will be in here
import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';
import {initPaymentTypes} from '../types/wallet';

// API Routes
const init_payment = '/init-token.php';

export const initiatePaymentRemote = async (payload: initPaymentTypes) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + init_payment,
      payload,
    );
    if (response.status === 200) {
      return response.data;
    } else {
      failedLog('initiatePaymentOrder()', response);
    }
  } catch (err) {
    console.log(err);
    throw 'Network Query Failed';
  }
};

const failedLog = (functionname: string, response: any) => {
  console.log(
    `\x1b[35m  Request ${functionname} : ${JSON.stringify(response)} \x1b[0m`,
  );
  throw response;
};
