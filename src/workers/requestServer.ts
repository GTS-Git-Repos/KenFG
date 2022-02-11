import {METHODS} from '../constants/API_constants';

const requestServer = function (
  method: string,
  url: string,
  payload?: any,
): any {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  return new Promise((resolve, reject) => {
    const options: any = {
      signal: controller.signal,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (method === METHODS.POST) {
      options.body = JSON.stringify(payload);
    }

    fetch(url, options)
      .then(serverResponse => {
        clearTimeout(timeoutId);
        if (serverResponse.ok) {
          logRequest(url, payload);
          if (serverResponse.headers.get('content-length') === '0') {
            resolve({status: serverResponse.status});
          } else {
            serverResponse
              .json()
              .then(data => {
                resolve({status: serverResponse.status, data});
              })
              .catch(err => {
                console.log(err);
                ErrorRequest(url, payload);
                reject('Parse Failed On Success');
              });
          }
        } else {
          console.log('>> Status: ', serverResponse.status);
          ErrorRequest(url, payload);
          serverResponse
            .json()
            .then(data => {
              resolve({status: serverResponse.status, data});
            })
            .catch(err => {
              reject('Parse Failed On Failed');
            });
        }
      })
      .catch(err => {
        clearTimeout(timeoutId);

        console.log(err);
        ErrorRequest(url, payload);
        reject('Failed Request');
      });
  });
};

export default requestServer;

const logRequest = (url: string, payload: any) => {
  // return;
  console.log(`\x1b[32m  Request ${url} : ${JSON.stringify(payload)} \x1b[0m`);
};
const ErrorRequest = (url: string, payload: any) => {
  console.log(
    `\x1b[33m [*ERROR*] Request ${url} : ${JSON.stringify(payload)} \x1b[0m`,
  );
};
