import c from '../actions/constants';

const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case c.SET_BALANCE:
      return action.payload;
    case c.DEPOSIT:
      return state + action.payload;
    case c.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

export default balanceReducer;
