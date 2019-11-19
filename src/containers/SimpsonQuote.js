import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuoteSelector, getQuoteLoading } from '../selectors/quoteSelector';
import { getQuotePromise } from '../actions/quoteActions';
import Quote from '../components/quote/Quote';

function SimpsonQuote({ quote, loading, getQuote }) {

  useEffect(() => {
    getQuote();
  }, []);

  if(loading) return <h1>Loading Simpsons quote...</h1>;

  return (
    <Quote quote={quote.quote} characterName={quote.characterName} characterImage={quote.characterImage} />
  );

}

SimpsonQuote.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  getQuote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  quote: getQuoteSelector(state),
  loading: getQuoteLoading(state)
});

const mapDispatchToProps = dispatch => ({
  getQuote() {
    dispatch(getQuotePromise());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonQuote);

