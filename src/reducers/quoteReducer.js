import { FETCH_QUOTE_LOADING, FETCH_QUOTE_DONE, FETCH_QUOTE, FETCH_ERROR } from '../actions/quoteActions';

const initialState = {
  quote: {
    quote: '',
    characterName: '',
    characterImage: '',
  },
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTE_DONE:
      return { ...state, loading: false };
    case FETCH_QUOTE:
      return { ...state, quote: { ...action.payload } };
    case FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
