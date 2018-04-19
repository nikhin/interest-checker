import { FETCH_INTEREST } from './constants';

export const fetchInterest = () => {
  return dispatch => {
    return fetch('http://localhost:3001/interest')
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_INTEREST, interest: json }));
  }
};