// WithLogging.test.js
import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";

// Define a simple functional component
const MyComponent = () => <p>MyComponent</p>;

describe("WithLogging HOC", () => {
  // Mock console.log for testing
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it("should log the message with 'Component' when the wrapped element is pure HTML", () => {
    const WrappedComponent = WithLogging(() => <p />);

    const wrapper = mount(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith("Component is mounted");
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith("Component is going to unmount");
  });

  it("should log the message with the name of the component when the wrapped element is Login component", () => {
    const Login = () => <p>Login</p>;
    Login.displayName = "LoginComponent";

    const WrappedComponent = WithLogging(Login);

    const wrapper = mount(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith("LoginComponent is mounted");
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith("LoginComponent is going to unmount");
  });
});
