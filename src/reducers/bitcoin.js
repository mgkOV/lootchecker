import c from '../actions/constants';

const bitcoinReducer = (state = {}, action) => {
  switch (action.type) {
    case c.FETCH_BITCOIN:
      return action.payload;
    default:
      return state;
  }
};

export default bitcoinReducer;
