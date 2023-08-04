import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.text()).toContain('Login to access the full dashboard');
  });
});

describe('input label', () => {
  it('renders two input and two label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
