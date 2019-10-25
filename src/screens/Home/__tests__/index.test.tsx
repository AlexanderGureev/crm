import { shallow } from 'enzyme';
import React from 'react';
import App from '../../../App';

describe('App', () => {
  it('app renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
