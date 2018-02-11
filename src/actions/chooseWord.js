export const CHOOSE_WORD = 'CHOOSE_WORD';

export default (word) => {
  return {
    type: CHOOSE_WORD,
    payload: word
  }
}
