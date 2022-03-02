const fileUploadServer = async function (url: string, formData: any): any {
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open('POST', 'http://kenfg.com/api//kyc.php');

  xhr.send(formData);
  return;

  return new Promise((resolve, reject) => {
    const options: any = {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      body: formData,
    };
    fetch(url, options)
      .then(serverResponse => {
        if (serverResponse.ok) {
          // logRequest(url, payload);
          resolve(true);
          return;
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
                console.log(err);
                // ErrorRequest(url, payload);
                reject('Parse Failed On Success');
              });
          }
        } else {
          console.log('> Status Code: ', serverResponse.status);
          reject(false);
          return;
          // ErrorRequest(url, payload);
          serverResponse
            .json()
            .then(data => {
              resolve({status: serverResponse.status, data});
            })
            .catch(err => {
              console.log(err);

              reject('Parse Failed On Failed');
            });
        }
      })
      .catch(err => {
        console.log(err);
        reject('Request Failed');
      });
  });
};

export default fileUploadServer;

// const logRequest = (url: string, payload: any) => {
//   // return;
//   console.log(`\x1b[32m  Request ${url} : ${JSON.stringify(payload)} \x1b[0m`);
// };
// const ErrorRequest = (url: string, payload: any) => {
//   console.log(
//     `\x1b[33m [*ERROR*] Request ${url} : ${JSON.stringify(payload)} \x1b[0m`,
//   );
// };
