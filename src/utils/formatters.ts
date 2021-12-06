import jwt_decode from 'jwt-decode';

export const decodeJwt = (jwt: string) => {
  try {
    const token = jwt_decode(jwt);
    return token;
  } catch (err) {
    return false;
  }
};
