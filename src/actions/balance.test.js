import c from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;
  const expectedAction = { type: c.SET_BALANCE, payload: balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const amount = 20;
  const expectedAction = { type: c.DEPOSIT, payload: amount };

  expect(actions.deposit(amount)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
  const amount = 20;
  const expectedAction = { type: c.WITHDRAW, payload: amount };

  expect(actions.withdraw(amount)).toEqual(expectedAction);
});
