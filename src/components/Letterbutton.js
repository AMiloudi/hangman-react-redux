import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './Letterbutton.css'

class LetterButton extends PureComponent {
  static propTypes = {
    letter: PropTypes.string.isRequired
  }
  
  constructor(props) {
    super(props)
  }

  showMyletter() {
    console.log(this.props.letter)
  }

  render() {
    return (
      <button onClick={this.showMyletter.bind(this)}>{this.props.letter}</button>
    )
  }
}

export default LetterButton
