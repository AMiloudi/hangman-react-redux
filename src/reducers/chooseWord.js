import { CHOOSE_WORD } from '../actions/chooseWord'

export default (state = 'word', {type, payload} = {}) => {
  switch (type) {

  case CHOOSE_WORD :
   return payload

   default :
   return state
  }
}
