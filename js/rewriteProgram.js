'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы калссический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function toggleVisibleMyDB(hidden) {
  if (hidden) {
    personalMovieDB.privat = !personalMovieDB.privat;
    showMyDB(personalMovieDB.privat);
  } else {
    personalMovieDB.privat = !personalMovieDB.privat;
    showMyDB(personalMovieDB.privat);
  }
}

toggleVisibleMyDB(personalMovieDB.privat);

function writeYourGeners() {
  for (let i = 0; i < 3; i++) {
    if (personalMovieDB.genres[i] !== '') {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`
      );

      console.log(
        personalMovieDB.genres.forEach(function (i) {
          console.log(
            `Любимый жанр # ${i + 1} - это ${personalMovieDB.genres[i]}`
          );
        })
      );
    }
  }
}

writeYourGeners();
