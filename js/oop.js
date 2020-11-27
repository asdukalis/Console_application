'use strict';

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Say hello!!!');
  },
};

const jonh = Object.create(soldier);
// const jonh = {
//   health: 200,
// };

// jonh.__proto__ = soldier;  -- устарела
Object.setPrototypeOf(jonh, soldier);

console.log(jonh);
console.log(jonh.sayHello());
