export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(results => results.json())
    .then(quote => {
      return {
        quote: quote[0].quote,
        characterName: quote[0].character,
        characterImage: quote[0].image
      };
    });
};
