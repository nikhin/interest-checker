import * as constants from '../actions/constants';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
  let balance;

  switch(action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = state + action.deposit;
      break;
    case constants.WITHDRAW:
      balance = state - action.withdrawal;
      if(balance < 0) balance =0;
      break;
    default:
      balance = 0;
  }
  

  return balance;
}

export default balance;