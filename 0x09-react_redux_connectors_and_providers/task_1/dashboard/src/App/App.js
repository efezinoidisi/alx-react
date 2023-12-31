import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { AppContext, user } from './AppContext';
import { connect } from 'react-redux';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from '../actions/uiActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: getLatestNotification() },
      ],
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  markNotificationAsRead(id) {
    const newList = this.listNotifications.filter(
      (notification) => notification.id !== id
    );
    this.setState({ listNotifications: newList });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: user,
    });
  }

  render() {
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
    } = this.props;
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logout: this.state.logOut,
        }}
      >
        <React.Fragment>
          <div className={css(styles.app)}>
            <div className={css(styles.headingSection)}>
              <Notifications
                markNotificationAsRead={this.markNotificationAsRead}
                listNotifications={this.state.listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={displayNotificationDrawer}
                handleHideDrawer={hideNotificationDrawer}
              />
              <Header />
            </div>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the school'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis at tempora odio, necessitatibus repudiandae
                reiciendis cum nemo sed asperiores ut molestiae eaque aliquam
                illo ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
  displayNotificationDrawer: () => {},
  displayDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  displayDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
