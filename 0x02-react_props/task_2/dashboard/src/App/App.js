import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Header from '../Header/Header';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

function App() {
  const currentYear = getFullYear();
  const footer = getFooterCopy(true);
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <div className='App-body'>
          <Login />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
