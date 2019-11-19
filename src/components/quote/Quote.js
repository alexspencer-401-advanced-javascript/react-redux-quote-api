import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, characterName, characterImage }) => {
  return (
    <figure>
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
