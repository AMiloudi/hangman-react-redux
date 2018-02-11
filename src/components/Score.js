import React, { PureComponent } from 'react';

class Score extends PureComponent {

  render() {

    if(this.props.gameState == 2) {
      return (
        <p> You are a loser! The word was {this.props.chosenWord}. Click the play again button to retry. </p>
      )
    }

    if(this.props.gameState == 1) {
      return (
        <p> You are a winner! Click the play again button for more funsies. </p>
      )
    }



    return (
      <table>
        <tr>
          <td> Good answers: {this.props.goodAnswers} </td>
          <td> Wrong answers: {this.props.wrongAnswers} </td>
        </tr>
      </table>
    )
  }

}

export default Score
