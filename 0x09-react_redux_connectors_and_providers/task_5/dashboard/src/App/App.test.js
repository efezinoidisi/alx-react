import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



describe('<App />', () => {
    it('App renders without crashing', () => {
        shallow(<App />)
    });

    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);

    })

    it('should contain the Header componenr', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);

    })

    it('should contain the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);

    });

    it('should contain the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('does not render courselist if logged out', () => {
        const component = shallow(<App />);
        component.setProps({ isLoggedIn: false });
        expect(component.contains(<CourseList />)).toBe(true);
    });
    it('renders courselist if logged in', () => {
        const component = shallow(<App isLoggedIn={true} />);
        expect(component.contains(<CourseList />)).toBe(true);
        expect(component.contains(<Login />)).toBe(false);
    });
});



describe('App component', () => {
    test('should call logOut and show alert when pressing "Control" and "h" keys', () => {
      // Mock the logOut function
      const mockLogOut = jest.fn();
  
      // Render the App component with the mocked logOut function
      const { container } = render(<App logOut={mockLogOut} />);
  
      // Create a keyboard event to simulate pressing "Control" and "h" keys
      const keyEvent = new KeyboardEvent('keydown', {
        key: 'h',
        ctrlKey: true,
      });
  
      // Dispatch the keyboard event on the document
      document.dispatchEvent(keyEvent);
  
      // Expect the logOut function to have been called
      expect(mockLogOut).toHaveBeenCalledTimes(1);
  
      // Expect the alert to have been displayed with the correct message
      expect(window.alert).toHaveBeenCalledWith('Logging you out');
    });
  });

  describe('DrawerComponent', () => {
    it('should have default state displayDrawer set to false', () => {
      const wrapper = mount(<DrawerComponent />);
      expect(wrapper.state('displayDrawer')).toBe(false);
    });
  
    it('should update state displayDrawer to true after calling handleDisplayDrawer', () => {
      const wrapper = mount(<DrawerComponent />);
      const instance = wrapper.instance();
      const handleDisplayDrawerSpy = jest.spyOn(instance, 'handleDisplayDrawer');
  
      instance.handleDisplayDrawer();
      wrapper.update();
  
      expect(handleDisplayDrawerSpy).toHaveBeenCalled();
      expect(wrapper.state('displayDrawer')).toBe(true);
    });
  
    it('should update state displayDrawer to false after calling handleHideDrawer', () => {
      const wrapper = mount(<DrawerComponent />);
      const instance = wrapper.instance();
      const handleHideDrawerSpy = jest.spyOn(instance, 'handleHideDrawer');
  
      instance.handleHideDrawer();
      wrapper.update();
  
      expect(handleHideDrawerSpy).toHaveBeenCalled();
      expect(wrapper.state('displayDrawer')).toBe(false);
    });
  });




