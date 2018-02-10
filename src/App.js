import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LetterButton from './components/Letterbuttons'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">The Hangman Game</h1>
      </header>
      <p className="App-intro">
      <LetterButton/>
      </p>
      </div>
    );
  }
}

export default App;
