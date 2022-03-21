export const BASE_URL = process.env.REACT_APP_HTTP_API_BASEURL;
export const HTTP_AUTH_SECRET = process.env.REACT_APP_HTTP_AUTH_SECRET;

export const req = async (path, opts = {

}) => {
  if (opts.body) {
    opts.body = JSON.stringify(opts.body);
    // todo: temp solutions, determine the content type by content in future
    opts.headers = {
      'Content-Type': 'application/json',
    };
    // opts.credentials = 'same-origin';
  }

  opts.headers = {
    'Content-Type': 'application/json',
  };

  const res = await fetch(`${BASE_URL}/${path}`, {...opts, credentials: 'include'});

  return res;
};

