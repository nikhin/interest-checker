import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/app';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected BankBalance component', () => {
    expect(app.find('Connect(BankBalance)').exists()).toBe(true);
  });

  it('contains a connected Interest component', () => {
    expect(app.find('Connect(Interest)').exists()).toBe(true);
  });

});