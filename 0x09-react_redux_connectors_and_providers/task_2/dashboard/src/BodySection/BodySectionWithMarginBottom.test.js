import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('should render correctly a BodySection component and pass props correctly', () => {
    const title = 'test title';
    const children = <p>test children node</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // Test if it renders one BodySection component
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Test if the props are passed correctly to the BodySection component
    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(title);
    expect(bodySectionProps.children).toEqual(children);
  });
});
