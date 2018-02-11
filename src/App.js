import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters'
import Word from './components/Word'
import Score from './components/Score'
import PlayAgain from './components/PlayAgain'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      picked: [],
      chosenWord: "php",
      goodAnswers: 0,
      wrongAnswers: 0,
      gameState: 0 // 0 = playing, 1 = win, 2 = lose
    };

    this.chooseLetter = this.chooseLetter.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  handleGameState(picked, wrongAnswers) {
    let wordLetters = this.state.chosenWord.split("");
    let dashedWord = wordLetters.map(function(letter, index){
      if(picked.includes(letter.toUpperCase())) {
        return letter;
      }

      return " _ ";
    }, this);

    if(dashedWord.indexOf(" _ ") == -1) {
      this.setState({
        gameState: 1 // Winner!
      })
    }

    if(wrongAnswers == 6) {
      this.setState({
        gameState: 2 // Loser!
      })
    }
  }

  newGame() {
    this.setState({
      picked: [],
      chosenWord: "PHPisveelcooler",
      goodAnswers: 0,
      wrongAnswers: 0,
      gameState: 0
    });
  }

  chooseLetter(chosenLetter) {
    this.setState({
      picked: this.state.picked.concat([chosenLetter])
    })

    let word = this.state.chosenWord.toUpperCase();
    if(word.indexOf(chosenLetter) === -1) {
      this.setState({
        wrongAnswers: this.state.wrongAnswers + 1
      })
    } else {
      this.setState({
        goodAnswers: this.state.goodAnswers + 1
      })
    }

    this.handleGameState(this.state.picked.concat([chosenLetter]), this.state.wrongAnswers + 1);
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">The Hangman Game</h1>
      </header>

      <div class="infobox">
        <Score goodAnswers={this.state.goodAnswers} wrongAnswers={this.state.wrongAnswers} gameState={this.state.gameState} chosenWord={this.state.chosenWord} />
      </div>

      <div class="wordbox">
        <Word chosenWord={this.state.chosenWord} picked={this.state.picked} />
      </div>

      <div class="letterbox">
        <Letters chooseLetter={this.chooseLetter} picked={this.state.picked} wrongAnswers={this.state.wrongAnswers}/>
      </div>

      <div class="playagainbox">
        <PlayAgain newGame={this.newGame} />
      </div>

      </div>
    );
  }
}

export default App;
