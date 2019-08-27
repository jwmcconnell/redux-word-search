export const getWords = state => state.words.words;
export const getFirstWords = (state, numWords = 1000) => getTopWordsByTerm(state).slice(0, numWords);
export const getSearchTerm = state => state.words.searchTerm;
export const getTopWordsByTerm = state => {
  const words = getWords(state);
  const term = getSearchTerm(state);
  const filtered = words.filter(word => word.includes(term));
  return filtered;
};
