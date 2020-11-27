import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Switch>
  );
}

export default App;
