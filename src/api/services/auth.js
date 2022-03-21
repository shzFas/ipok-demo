import {HTTP_AUTH_SECRET, req} from '../http';

export const authRequestSms = (phone) => {
  return req(`auth/issue-code/phone`, {method: 'POST', body: {phone}});
};

export const authLoginBySmsCode =(phone, code) => {
  return req(`auth/login/phone-code`, {method: 'POST', body: {
    phone, code, secret: HTTP_AUTH_SECRET,
  }});
};
