import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_INTEREST } from '../../actions/constants';
import { fetchInterest } from '../../actions/interest';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ interest: {} });
const mockResponse = { body: { interest: '10' }};

fetchMock.get('http://localhost:3001/interest', mockResponse);

it('creates an async action to fetch the interest value', () => {
  const expectedActions = [{ interest: mockResponse.body, type: FETCH_INTEREST }];

  return store.dispatch(fetchInterest()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});