import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class BankBalance extends Component {
  constructor() {
    super();

    this.state = { balance: 0 };
  }

  updateBalance = event => this.setState({ balance: parseInt(event.target.value) })

  deposit = () => this.props.deposit(this.state.balance)

  withdraw = () => this.props.withdraw(this.state.balance)

  render() {
    return (
      <div>
        <h3 className='balance'>Bank balance: {this.props.balance}</h3>
        <br />
        <input className='input-balance' onChange={this.updateBalance} />
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(BankBalance);