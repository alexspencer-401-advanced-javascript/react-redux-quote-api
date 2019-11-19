import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote, characterName, characterImage }) => {
  return (
    <figure className={styles.Quote}>
      <img src={characterImage} />
      <figcaption>{characterName}</figcaption>
      <p>{quote}</p>
    </figure>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};

export default Quote;
