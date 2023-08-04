import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Header from '../Header/Header';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  const currentYear = getFullYear();
  const footer = getFooterCopy(true);
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <div className='App-body'>
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>

        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
