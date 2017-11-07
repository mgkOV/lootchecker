import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    withdraw: PropTypes.func.isRequired,
    deposit: PropTypes.func.isRequired
  };

  state = {
    balance: ''
  };

  updateBalance = e => {
    const balance = parseInt(e.target.value, 10);
    if (balance) {
      this.setState({
        balance
      });
    }
  };

  handleDeposit = () => {
    this.props.deposit(this.state.balance);
    this.setState({
      balance: ''
    });
  };

  handleWithdraw = () => {
    this.props.withdraw(this.state.balance);
    this.setState({
      balance: ''
    });
  };

  render() {
    return (
      <div>
        <h3 className="balance">
          Wallet balance: {this.props.balance}
        </h3>
        <br />
        <input
          className="input-wallet"
          onChange={this.updateBalance}
          value={this.state.balance}
        />
        <button className="btn-deposit" onClick={this.handleDeposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.handleWithdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

export default connect(state => ({ balance: state }), { deposit, withdraw })(
  Wallet
);
