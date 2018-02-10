import React, { PureComponent } from 'react';

const words= [ 'Table', 'Television', 'Kitchen', 'Carpet','Chair','Suitcase']


class Word extends PureComponent {


render() {
  return (
    alphabet.map((letter, index)=>
       <button>{letter}</button>
    )
  )
}
}

export default Word
