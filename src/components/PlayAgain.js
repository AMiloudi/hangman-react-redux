import React, { PureComponent } from 'react';

class PlayAgain extends PureComponent {

  render() {
    return (
      <button onClick={() => this.props.newGame()}>
        New Game!
      </button>
    )
  }

}

export default PlayAgain
