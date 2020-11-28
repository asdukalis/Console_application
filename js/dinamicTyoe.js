'use strict';

// To string

// 1
console.log(typeof String(null));
console.log(typeof String(4));
// 2 Конкатинация
console.log(typeof (5 + ''));
const num = 5;
console.log('htts://fb.com/catalog/' + num);

// To number

// 1 Number
console.log(typeof Number('4'));
// 2 унарный +
console.log(typeof +'4');
// 3 parseInt
console.log(typeof parseInt('15px', 10));

// To boolean
false === 0, '', null, undefined, NaN;
// 1
let switcher = null;
if (switcher) {
  console.log('Working...');
}
switcher = 1;
if (switcher) {
  console.log('Working...');
}
// 2
console.log(typeof Boolean('4'));
// 3
console.log(typeof !!'4');
