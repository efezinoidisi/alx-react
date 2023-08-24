import React from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const logOut = () => {};

const UserContext = React.createContext({ user, logOut });

export { UserContext, logOut, user };
