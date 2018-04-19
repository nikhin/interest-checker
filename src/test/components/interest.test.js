import React from 'react';
import { mount, shallow } from 'enzyme';
import { Interest } from '../../components/interest';

describe('Interest', () => {
  let props = { balance: 10, interest: {} };
  let interest = shallow(<Interest {...props} />);

  it('renders properly', () => {
    expect(interest).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchinterest = jest.fn();

    beforeEach(() => {
      props.fetchInterest = mockFetchinterest;
      interest = mount(<Interest {...props} />);
    });

    it('dispatches the `fetchInterest()` method it receives from props', () => {
      expect(mockFetchinterest).toHaveBeenCalled();
    });
  });

  describe('when there are valid interest props', () => {
    beforeEach(() => {
      props = { balance: 10, interest: {"finance": {"interestValue": "0.09","bank": "rbi","location": "mississauga"}} };
      interest = shallow(<Interest {...props} />);
    });

    it('displays the correct interest value', () => {
      expect(interest.find('h3').text()).toEqual('Total Interest: 0.9');
    });
  });
});