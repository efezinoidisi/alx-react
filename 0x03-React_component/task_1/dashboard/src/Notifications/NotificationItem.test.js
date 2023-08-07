import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Notification Item', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.find('li')).toHaveLength(1);
  });
});

describe('Notification Item prop', () => {
  it('should render the correct props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li[data-notification-type]');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.text()).toBe('test');
  });
});
describe('Notification Item props', () => {
  it('should render the correct prop for html', () => {
    const wrapper = shallow(
      <NotificationItem type='default' html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li[data-notification-type]');
    expect(li.prop('data-notification-type')).toBe('default');
    expect(li.html()).toBe(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});
