import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App', () => {
  const app = shallow(<App />);

  it('renders propperly', () => {
    expect(app).toMatchSnapshot();
  });
});
