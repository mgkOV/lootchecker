import c from '../actions/constants';

export const balanceReducer = (state, action) => {
  switch (action.type) {
    case c.SET_BALANCE:
      return action.payload;
    default:
      return state;
  }
};
