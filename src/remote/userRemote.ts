import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';

// API Routes
const req_update_user = '/update-profile.php';
const req_login = '/login.php';
const req_verify = '/verify.php';

export const updateUserRemote = async (payload: any) => {
  try {
    const response = await requestServer(
      METHODS.POST,
      BASE_URL + req_update_user,
      payload,
    );
    if (response.status === 200) {
      return response.data;
    } else {
      failedLog('updateUserRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const loginRemote = async (payload: any) => {
  try {
    const response = await requestServer(METHODS.POST, BASE_URL + req_login, {
      mobile: payload.mobile,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      failedLog('loginRemote()', response);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const otpVerifyRemote = async (payload: any) => {
  try {
    const response = await requestServer(METHODS.POST, BASE_URL + req_verify, {
      mobile: payload.mobile,
      otp: payload.otp,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      failedLog('otpVerifyRemote()', response);
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
