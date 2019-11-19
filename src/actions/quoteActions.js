import { getQuote } from '../services/simpsonsApi';

export const FETCH_QUOTE_LOADING = 'FETCH_QUOTE_LOADING';
export const FETCH_QUOTE = 'FETCH_QUOTE';
export const FETCH_QUOTE_DONE = 'FETCH_QUOTE_DONE';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getQuotePromise = () => ({
  type: FETCH_QUOTE,
  pendingType: FETCH_QUOTE_LOADING,
  fulfilledType: FETCH_QUOTE_DONE,
  payload: getQuote()
});
