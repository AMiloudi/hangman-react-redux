import React, { PureComponent } from 'react';

class Word extends PureComponent {
  render() {

    let wordLetters = this.props.chosenWord.split("");
    let dashedWord = wordLetters.map(function(letter, index){
      if(this.props.picked.includes(letter.toUpperCase())) {
        return letter;
      }

      return " _ ";
    }, this);

    return dashedWord
  }
}

export default Word
