import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  let testConsole;

  beforeEach(() => {
    testConsole = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    testConsole.mockRestore();
  });

  it('should work with pure html component', () => {
    const WrappedComponent = WithLogging(() => <p>test component</p>);

    const wrapper = mount(<WrappedComponent />);

    expect(testConsole).toHaveBeenCalledWith('Component is mounted');
    wrapper.unmount();
    expect(testConsole).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('should work with the Login component', () => {
    const Login = () => <p>Login</p>;
    Login.name = 'Login';

    const WrappedComponent = WithLogging(Login);

    const wrapper = mount(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith(
      'Component Login is going to unmount'
    );
  });
});
