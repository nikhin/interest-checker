import interestReducer from '../../reducers/interest';
import { FETCH_INTEREST } from '../../actions/constants';
describe('interestReducer', () => {
  const interest = { interest: '10' };

  it('fetches and sets the interest data', () => {
    expect(interestReducer({}, { type: FETCH_INTEREST, interest }))
      .toEqual(interest);
  });
});