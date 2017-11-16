import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    bitcoin: PropTypes.object.isRequired,
    fetchBitcoin: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin = () => {
    const { bitcoin, balance } = this.props;

    if (Object.keys(bitcoin).length === 0) return '';
    const usdRate = parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    return balance / usdRate;
  };

  render() {
    return <h3>Bitcoin balance: {this.computeBitcoin()}</h3>;
  }
}

export default connect(({ balance, bitcoin }) => ({ balance, bitcoin }), {
  fetchBitcoin
})(Loot);
