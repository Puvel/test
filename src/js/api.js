export default {
  base: 'https://api.themoviedb.org/3',
  key: 'a2c80789bced092c10745aa4387db8d2',
  page: 1,
  query: '',
  fetchRatingFilms() {
    return fetch(
      `${this.base}/trending/movie/day?api_key=${this.key}&page=${this.page}`,
    )
      .then(response => response.json())
      .then(response => {
        return response.results;
      });
  },
  fetchGenre() {
    return fetch(
      `${this.base}/genre/movie/list?api_key=${this.key}&language=en-US`,
    )
      .then(response => response.json())
      .then(response => {
        return response;
      });
  },
  fetchSearchFilms() {
    return fetch(
      `${this.base}/search/movie?api_key=${this.key}&language=en-US&query=${this.query}&page=${this.page}&include_adult=false`,
    )
      .then(response => response.json())
      .then(response => {
        return response.results;
      });
  },
  fetchOneFilm() {
    return fetch(
      `${this.base}/movie/${filmId}?api_key=${this.key}&language=en-US`,
    )
      .then(response => response.json())
      .then(response => {
        return response;
      });
  },
};

// const base = 'https://api.themoviedb.org/3';
// const oneFilm = '/movie/443791';
// const resourceSearch = '/search/movie';
// const resourceList = '/trending/movie/day';
// const resourceGenre = '/genre/movie/list';
// const searchParams ='?api_key=a2c80789bced092c10745aa4387db8d2&language=en-US&query=hall&page=1&include_adult=false';
// const genreParams = '?api_key=a2c80789bced092c10745aa4387db8d2&language=en-US';
// const ratingParams = '?api_key=a2c80789bced092c10745aa4387db8d2&page=1';

// const resA = fetch(base + resourceList + ratingParams)
//   .then(response => response.json())
//   .then(response => {
//     return response.results;
//   });

// const resB = fetch(base + resourceGenre + genreParams)
//   .then(response => response.json())
//   .then(response => {
//     return response;
//   });
