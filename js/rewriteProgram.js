'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы калссический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  rememberMyFilms: function () {
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
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function (hidden) {
    if (hidden) {
      personalMovieDB.privat = !personalMovieDB.privat;
      personalMovieDB.showMyDB(personalMovieDB.privat);
    } else {
      personalMovieDB.privat = !personalMovieDB.privat;
      personalMovieDB.showMyDB(personalMovieDB.privat);
    }
  },
  writeYourGeners: function () {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`
      );
      if (
        personalMovieDB.genres[i] === '' ||
        personalMovieDB.genres[i] === null
      ) {
        i--;
      }
    }
    console.log(
      personalMovieDB.genres.forEach(function (i, index) {
        console.log(
          `Любимый жанр # ${index + 1} - это ${personalMovieDB.genres[index]}`
        );
      })
    );
  },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGeners();
