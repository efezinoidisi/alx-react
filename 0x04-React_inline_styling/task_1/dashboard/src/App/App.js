import React from 'react';
import { getLatestNotification } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import {StyleSheet, css} from 'aphrodite'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
        },
      ],

      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'default', html: { __html: getLatestNotification() } },
      ],
    };
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };
  render() {
    const { listCourses, listNotifications } = this.state;
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          <div className={css(styles.AppBody)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginBottom>
            )}

            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                vero distinctio quasi, placeat voluptate nemo!{' '}
              </p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  check: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  AppBody : {
  borderTop: '3px solid #c7254e',
  borderBottom: '3px solid #c7254e',
  height: '60vh',
  paddingTop: '4rem',
  paddingLeft: '3rem',
  fontWeight: '500',
  fontSize: '1.125rem'
},
})

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
