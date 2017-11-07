import c from './constants';

export const setBalance = balance => ({
  type: c.SET_BALANCE,
  payload: balance
});

export const deposit = amount => ({
  type: c.DEPOSIT,
  payload: amount
});

export const withdraw = amount => ({
  type: c.WITHDRAW,
  payload: amount
});
