import {req} from '../http';

export const userGetInfo = () => {
  return req(`user/me`, {method: 'GET'});
};

export const userGetProfile = () => {
  return req(`user/profile`, {method: 'GET'});
};

export const userEsiaFill = (token) => {
  return req(`user/esia/fill`, {method: 'POST', body: {token}});
};

export const userEntryListProposes = (uuidEntry) => {
  return req(`user/entry/${uuidEntry}/proposes`, {method: 'GET'});
};


