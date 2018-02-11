import React, { PureComponent } from 'react';

class Hangman extends PureComponent {

  render() {

    switch (this.props.wrongAnswers) {

      case 1 :
      return (<div class="hangman wrong-1"></div>)
      case 2 :
      return (<div class="hangman wrong-2"></div>)
      case 3 :
      return (<div class="hangman wrong-3"></div>)
      case 4 :
      return (<div class="hangman wrong-4"></div>)
      case 5 :
      return (<div class="hangman wrong-5"></div>)
      case 6 :
      return (<div class="hangman wrong-6"></div>)

      default :
      return (<div class="hangman"></div>)
    }
  }

}

export default Hangman
