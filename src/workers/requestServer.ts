import {METHODS} from '../constants/API_constants';

const requestServer = function (
  method: string,
  url: string,
  payload?: any,
): any {
  return new Promise((resolve, reject) => {
    const options: any = {
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
        if (serverResponse.ok) {
          console.log(
            `\x1b[32m  Request ${url} : ${JSON.stringify(payload)} \x1b[0m`,
          );
          serverResponse
            .json()
            .then(data => {
              resolve(data);
            })
            .catch(err => {
              console.log('Parse Failed', err);
              reject('Parse Failed');
            });
        } else {
          console.log('Status Code:', serverResponse.status);
          reject('Invalid Response');
        }
      })
      .catch(err => {
        console.log('Failed Request', err);
        reject('Failed Request');
      });
  });
};

export default requestServer;
