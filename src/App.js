import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BasicReducer from './components/BasicReducer';

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
      <BasicReducer />
    </BrowserRouter>
  );
}
export default App;
