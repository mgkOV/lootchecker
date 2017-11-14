import c from './constants';

export const fetchBitcoin = () => dispatch =>
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json)
    .then(json => dispatch({ type: c.FETCH_BITCOIN, bitcoin: json }));
