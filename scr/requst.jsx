function httpIndex() {
  return 'https://test.chexiaopin.cn';
  // return 'https://mini.chexiaopin.cn';
}
function getFetch(api, body) {
  let controller = new AbortController();
  let signal = controller.signal;
  const timeoutId = setTimeout(() => controller.abort(), 30000);
  let Data;
  if (body) {
    Data = api + body;
  } else {
    Data = api;
  }
  return fetch(httpIndex() + Data, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'client-type': 1,
    },
    signal: signal,
  }).then(res => {
    clearTimeout(timeoutId);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res;
  });
}
export default {
  getFetch
};
