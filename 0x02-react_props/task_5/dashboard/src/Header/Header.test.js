import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });
});

describe('Header img and h1', () => {
  it('renders img and h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
