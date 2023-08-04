import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });
});

describe('App component - Notification', () => {
  it('should render the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });
});

describe('App component - Header', () => {
  it('should render the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
describe('App component - login', () => {
  it('should render the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});

describe('App component - Footer', () => {
  it('should render the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});

describe('App component', () => {
  it('does not render Courselist if not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
    expect(wrapper.contains(<Login />)).toBe(true);
  });
  it('renders courselist if logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<CourseList />)).toBe(true);
    expect(wrapper.contains(<Login />)).toBe(false);
  });
});
