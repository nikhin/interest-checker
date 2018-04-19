import React from 'react';
import { shallow } from 'enzyme';
import { BankBalance } from '../../components/bank-balance';

describe('BankBalance', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const bankBalance = shallow(<BankBalance {...props} />);

  it('renders properly', () => {
    expect(bankBalance).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(bankBalance.find('.balance').text()).toEqual('Bank balance: 20');
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(bankBalance.find('.input-balance').exists()).toBe(true);
  });

  describe('when the user types into the  input', () => {
    const userBalance = '25';

    beforeEach(() => {
      bankBalance.find('.input-balance')
        .simulate('change', { target: { value: userBalance }});
    });

    it('updates the local bank balance in `state` and converts it to a number', () => {
      expect(bankBalance.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => bankBalance.find('.btn-deposit').simulate('click'));

      it('dispatches the `deposit()` it receives from props with the local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => bankBalance.find('.btn-withdraw').simulate('click'));

      it('dispatches the `withdraw()` it receives from props with the local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});