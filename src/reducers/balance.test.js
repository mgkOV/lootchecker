import balanceReducer from './balance';
import balanceReducer2 from './balance';
import c from '../actions/constants';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('sets the balance', () => {
      const action = { type: c.SET_BALANCE, payload: balance };

      expect(balanceReducer(undefined, action)).toEqual(balance);
    });

    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
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
