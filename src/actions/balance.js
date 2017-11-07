import c from './constants';

export const setBalance = balance => {
  return { type: c.SET_BALANCE, payload: balance };
};
