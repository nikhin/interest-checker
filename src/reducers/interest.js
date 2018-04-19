import { FETCH_INTEREST } from '../actions/constants';

const interest = (state = {}, action) => {
  switch(action.type) {
    case FETCH_INTEREST:
      return action.interest;
    default:
      return state;
  }
};

export default interest;