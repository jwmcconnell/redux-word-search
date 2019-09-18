import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../containers/words/SearchWords';
import TopWords from '../containers/words/TopWords';

const Words = ({ match }) => {
  return (
    <>
      <SearchWords />
      <TopWords match={match} />
    </>
  );
};

Words.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      count: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Words;
