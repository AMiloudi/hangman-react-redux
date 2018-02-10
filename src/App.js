import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">The Hangman Game</h1>
      </header>
      <p className="App-intro">
      <Letters/>
      </p>
      </div>
    );
  }
}

export default App;
