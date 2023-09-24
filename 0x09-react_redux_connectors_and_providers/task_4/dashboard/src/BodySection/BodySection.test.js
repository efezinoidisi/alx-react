import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('should render correctly with the given children and title', () => {
    const title = 'test title';
    const children = <p>test children node</p>;
    const wrapper = shallow(<BodySection title={title}>{children}</BodySection>);

    // Test if there is one h2 element and it includes the correct text
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual(title);

    // Test if there is one p element and it includes the correct text
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('test children node');

    // You can add more specific tests if needed for other elements or props
  });
});