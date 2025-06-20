import React from 'react';
import { UserProvider } from './context/UserContext';
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {
  return (
    <UserProvider>
      <Login/>
      <Profile />
    </UserProvider>
  );
}

export default App;
