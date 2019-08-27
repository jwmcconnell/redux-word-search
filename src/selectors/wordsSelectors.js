export const getWords = state => state.words;
export const getFirstWords = (state, numWords = 1000) => getWords(state).slice(0, numWords);
