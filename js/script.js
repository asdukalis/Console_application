const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// document.write(`Мы просмотрели ${numberOfFilms} фильмов`);
alert(`${numberOfFilms}`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
