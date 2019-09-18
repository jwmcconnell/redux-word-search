export const getWords = state => state.words.words;
export const getFirstWords = (state, numWords = 1000) => getTopWordsByTerm(state).slice(0, numWords);
export const getSearchTerm = state => state.words.searchTerm;
export const getTopWordsByTerm = state => getWords(state)
  .filter(w => w.includes(getSearchTerm(state).toLowerCase()));
