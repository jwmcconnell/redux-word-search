import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchTerm, handleUpdate }) => {
  return <input type="text" value={searchTerm} onChange={(e) => handleUpdate(e.target.value)} />;
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default SearchForm;
