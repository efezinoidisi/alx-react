import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});

describe('Footer copyright', () => {
  it('renders the text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
