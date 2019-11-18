export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(results => results.json)
    .then(quote => quote.json());
};
