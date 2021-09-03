import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long. Timeout after ${s} seconds.`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          body: JSON.stringify(data),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = res.json();

    if (!res.ok) throw new Error('error');
    return data;
  } catch (err) {
    throw err;
  }
};
