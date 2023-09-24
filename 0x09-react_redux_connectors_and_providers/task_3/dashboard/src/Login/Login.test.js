import React from 'react';
import Login from './Login';
import { shallow } from  'enzyme';


describe('<Login>', () => {
    test('renders without crashing', () => {
        shallow(<Header />);
    });

    test('rendera 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});

describe('Login Component', () => {
    it('should have the submit button disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('.submitButton');
        
        expect(submitButton.prop('disabled')).toBe(true);
    });

    it('should enable the submit button after changing input values', () => {
        const wrapper = shallow(<Login />);
        
        const emailInput = wrapper.find('#email');
        const passwordInput = wrapper.find('#password');
        const submitButton = wrapper.find('.submitButton');

        emailInput.simulate('change', { target: { value: 'test@example.com' } });
        passwordInput.simulate('change', { target: { value: 'testpassword' } });
        
        expect(submitButton.prop('disabled')).toBe(false);
    });
});
