// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import c from './constants';
import { fetchBitcoin } from './bitcoin';

// console.log('***', FETCH_BITCOIN);

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

const mockResponse = { bpi: 'bitcoin price index' };

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse
);

it('creates an async action to fetch bitcoin the value', () => {
  const expectedActions = [{ payload: mockResponse, type: c.FETCH_BITCOIN }];

  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
