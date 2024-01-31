import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
