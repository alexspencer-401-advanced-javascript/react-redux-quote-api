import React from 'react';
import PropTypes from 'prop-types';
import styles from './Load.css';

const Load = ({ newQuote }) => (
  <div className={styles.Load}>
    <button onClick={newQuote}>Get another quote!</button>
  </div>
);

Load.propTypes = {
  newQuote: PropTypes.func.isRequired
};

export default Load;
