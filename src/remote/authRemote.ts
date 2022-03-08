import {BASE_URL, METHODS} from '../constants/API_constants';
import requestServer from '../workers/requestServer';

// API Routes
const req_signup = '/login.php';
const req_login = '/login.php';
const req_verify = '/verify.php';

export const signupRemote = async (payload: any) => {
  try {
    const response = await requestServer(METHODS.POST, BASE_URL + req_signup, {
      mobile: payload.mobile,
      invitecode: (payload.invitecode ??= ''),
    });
    if (response.status === 200) {
      return response.data;
    } else {
      failedLog('signupRemote()', response);
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
      invitecode: (payload.invitecode ??= ''),
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
