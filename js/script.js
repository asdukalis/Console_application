'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// document.write(`Мы просмотрели ${numberOfFilms} фильмов`);
// alert(`${numberOfFilms}`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцнили его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцнили его?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцнили его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}
