import React from 'react';
import PropTypes from 'prop-types';

const Words = ({ words }) => {
  const wordsList = words.map((word, i) => (
    <li key={`${word}-${i}`}>{word}</li>
  ));
  return <ul>{wordsList}</ul>;
};

Words.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Words;
