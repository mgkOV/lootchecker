import { balanceReducer } from './balance';
import c from '../actions/constants';

describe('balanceReducer', () => {
  it('set a balance', () => {
    const balance = 10;
    const action = { type: c.SET_BALANCE, payload: balance };

    expect(balanceReducer(undefined, action)).toEqual(balance);
  });
});
