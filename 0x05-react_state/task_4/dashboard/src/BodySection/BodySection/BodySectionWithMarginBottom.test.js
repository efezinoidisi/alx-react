import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('should render correctly and pass the correct props', () => {
    const title = 'test title';
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);

    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(title);
    expect(bodySectionProps.children).toEqual(<p>test children node</p>);
  });
});
