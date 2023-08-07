import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });
});

// describe('App- header', () => {
//   it('renders a div with class App-header', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-header')).toHaveLength(1);
//   });
// });

// describe('App-body', () => {
//   it('renders a div with class App-body', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-body')).toHaveLength(1);
//   });
// });

// describe('App-footer', () => {
//   it('renders a div with class App-footer', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.App-footer')).toHaveLength(1);
//   });
// });
