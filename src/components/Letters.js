import React, { PureComponent } from 'react';
import LetterButton from './Letterbutton'

const alphabet = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X', 'Y', 'Z']

class Letters extends PureComponent {

  render() {
    return (
      alphabet.map((letter, index)=>
      <LetterButton letter={letter} />
    )
  )
}
}

export default Letters
