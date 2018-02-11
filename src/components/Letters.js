import React, { PureComponent } from 'react';
import LetterButton from './Letterbutton'

const alphabet = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X', 'Y', 'Z']

class Letters extends PureComponent {

  render() {
    return (
      alphabet.map( function(letter, index) {
        if(this.props.picked.includes(letter) || this.props.wrongAnswers == 6) {
          return <LetterButton letter={letter} chooseLetter={this.props.chooseLetter} iwaspicked="true" />
        }

        return <LetterButton letter={letter} chooseLetter={this.props.chooseLetter} />
      }, this)
    )
  }
}

export default Letters
