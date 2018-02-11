import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters'
import Word from './components/Word'
import Score from './components/Score'
import PlayAgain from './components/PlayAgain'
import Hangman from './components/Hangman'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      picked: [],
      chosenWord: this.chooseWord(),
      goodAnswers: 0,
      wrongAnswers: 0,
      gameState: 0 // 0 = playing, 1 = win, 2 = lose
    };

    this.chooseLetter = this.chooseLetter.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  chooseWord() {
    let words = ["Javascript", "Software", "Development"];

    return words[Math.floor(Math.random() * Math.floor(words.length))]
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
      chosenWord: this.chooseWord(),
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

      <Hangman wrongAnswers={this.state.wrongAnswers}/>

      <div className="infobox">
        <Score goodAnswers={this.state.goodAnswers} wrongAnswers={this.state.wrongAnswers} gameState={this.state.gameState} chosenWord={this.state.chosenWord} />
      </div>

      <div className="wordbox">
        <Word chosenWord={this.state.chosenWord} picked={this.state.picked} />
      </div>

      <div className="letterbox">
        <Letters chooseLetter={this.chooseLetter} picked={this.state.picked} wrongAnswers={this.state.wrongAnswers}/>
      </div>

      <div className="playagainbox">
        <PlayAgain newGame={this.newGame} />
      </div>

      </div>
    );
  }
}

const mapStateToProps = ({ word }) => ({ word })

export default connect (mapStateToProps)(App)
