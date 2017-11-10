import c from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balanceReducer = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case c.SET_BALANCE:
      balance = action.payload;
      break;
    case c.DEPOSIT:
      balance = state + action.payload;
      break;
    case c.WITHDRAW:
      balance = state - action.payload;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};

export default balanceReducer;
