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
          // handle when contest length is 0
          if (serverResponse.headers.get('content-length') === '0') {
            resolve({status: serverResponse.status});
          } else {
            serverResponse
              .json()
              .then(data => {
                resolve({status: serverResponse.status, data});
              })
              .catch(err => {
                logErrorRequest(url, payload, err);
                reject('Parse Failed on Success response');
              });
          }
        } else {
          console.log('> Status Code: ', serverResponse.status);
          logErrorRequest(url, payload, 'not ok response');
          serverResponse
            .json()
            .then(data => {
              resolve({status: serverResponse.status, data});
            })
            .catch(err => {
              console.log(err);

              reject('Parse Failed On failed request');
            });
        }
      })
      .catch(err => {
        clearTimeout(timeoutId);
        logErrorRequest(url, payload, err);
        reject('Request Failed');
      });
  });
};

export default requestServer;

const logRequest = (url: string, payload: any) => {
  // return;
  console.log(`\x1b[32m  Request ${url} : ${JSON.stringify(payload)} \x1b[0m`);
};
const logErrorRequest = (url: string, payload: any, err: any) => {
  console.log(err);
  console.log(
    `\x1b[33m [*ERROR*] Request ${url} : ${JSON.stringify(payload)} \x1b[0m`,
  );
};
