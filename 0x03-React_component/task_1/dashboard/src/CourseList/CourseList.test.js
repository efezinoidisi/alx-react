import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    wrapper.find('thead').forEach((row) => {
      expect(row.equals(<CourseListRow textFirstCell='Foo' />));
    });

    expect(wrapper.find('tbody').children()).toHaveLength(3);
    wrapper.find('tbody').forEach((row) => {
      expect(row.equals(<CourseListRow textFirstCell='Foo' />));
    });
  });
});
