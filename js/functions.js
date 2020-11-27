'use strict';
// let num = 20;

// function showFirstMessage(promp) {
//   console.log(promp);
//   let num = 10;
// }

// showFirstMessage('Hello World!');
// console.log(num);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello World';
// console.log(logg.slice(6, 1));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 11));

// alert('\u{1F60D}'); сайлик сердечки в глазах

// Первый метод —
// let str;
// str.indexOf(substr, pos)
// str.lastIndexOf(substr, position)
// str.slice(start [, end]) // Возвращает часть строки от start до (не включая) end.
// str.substring(start [, end]) -
// Возвращает часть строки между start и end. Это — почти то же, что и slice, но можно задавать start больше end.

// const test = '12px';
// console.log(parseInt(test));

// function first() {
//   // Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`я учу: ${lang}`);
//   callback();
// }

// learnJS('JavaScript', function () {
//   console.log('Я прошел этот урок!');
// });

// const options = {
//   name: 'Andrey',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red',
//   },
//   makeTest: function () {
//     console.log('Test');
//   },
// };

// options.makeTest();

// // дестркутуризация
// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);
// console.log(options.colors.bg);

// // delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);
