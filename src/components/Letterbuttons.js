import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './Letterbuttons.css'

const alphabet = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X', 'Y', 'Z']

class LetterButton extends PureComponent {
  static propTypes = {
    letter: PropTypes.string.isRequired,
  }

  clickLetter(){
    console.log(this)
  }


  render() {
    return (
      alphabet.map((letter, index)=>
      <button  onClick={this.clickLetter.bind(this)}>{letter}</button>
    )
  )
}
}

export default LetterButton
