import React from 'react';
import UserContextProvider from './Context/UserContextProvider';
import Profile from './Components/Profile';
import Login from './Components/Login';

const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
