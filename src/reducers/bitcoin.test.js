import bitcoinReducer from './bitcoin';
import c from '../actions/constants';

describe('bitcoinReducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' };

  it('fetches and sets the bitcoin data', () => {
    const result = bitcoinReducer(
      {},
      { type: c.FETCH_BITCOIN, payload: bitcoinData }
    );
    expect(result).toEqual(bitcoinData);
  });
});
