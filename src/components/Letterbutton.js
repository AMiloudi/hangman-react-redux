import React, { PureComponent } from 'react';
import './Letterbutton.css'

class LetterButton extends PureComponent {

  render() {
    if(this.props.iwaspicked === "true") {
      return (
        <button disabled="disabled">
          {this.props.letter}
        </button>
      )
    }

    return (
      <button onClick={() => this.props.chooseLetter(this.props.letter)}>
        {this.props.letter}
      </button>
    )
  }

}

export default LetterButton
