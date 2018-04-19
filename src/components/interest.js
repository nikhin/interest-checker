import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInterest } from '../actions/interest';
import _ from 'lodash'

export class Interest extends Component {
  componentDidMount() {
    this.props.fetchInterest();
  }

  computeInterest() {
    const { interest } = this.props;

    if (Object.keys(interest).length === 0) return '';

    return _.round(this.props.balance * parseFloat(interest.finance.interestValue),2);
  }

  render() {
    return (
      <h3>Total Interest: {this.computeInterest()}</h3>
    )
  }
}

export default connect(state => state, { fetchInterest })(Interest);