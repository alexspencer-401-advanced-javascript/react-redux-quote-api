import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ newQuote }) => (
  <button onClick={newQuote}>Get another quote!</button>
);

Load.propTypes = {
  newQuote: PropTypes.func.isRequired
};

export default Load;
