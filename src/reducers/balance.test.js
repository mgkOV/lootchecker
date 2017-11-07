import balanceReducer from './balance';
import c from '../actions/constants';

describe('balanceReducer', () => {
  it('sets the balance', () => {
    const balance = 10;
    const action = { type: c.SET_BALANCE, payload: balance };

    expect(balanceReducer(undefined, action)).toEqual(balance);
  });

  it('deposits into the balance', () => {
    const amount = 10;
    const initialState = 5;
    const action = { type: c.DEPOSIT, payload: amount };

    expect(balanceReducer(initialState, action)).toEqual(initialState + amount);
  });

  it('withdraws from the balance', () => {
    const amount = 10;
    const initialState = 15;
    const action = { type: c.WITHDRAW, payload: amount };

    expect(balanceReducer(initialState, action)).toEqual(initialState - amount);
  });
});
