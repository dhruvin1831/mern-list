import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import List from './components/List';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <List/>
      </div>
    )
  }
}

export default App

