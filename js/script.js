'use strict';

// const box = document.getElementById('box'),
//   btns = document.getElementsByTagName('button'),
//   circles = document.getElementsByClassName('circle'),
//   wrapper = document.querySelector('.wrapper'),
//   hearts = document.querySelectorAll('.heart'),
//   oneHeart = document.querySelector('.heart');

// hearts.forEach((item) => {
//   console.log(item);
// });

// box.style.backgroundColor = 'green';
// box.style.width = '500px';

// box.style.cssText = `background-color: blue; width: 500px;`;

// btns[1].style.borderRadius = '100%';
// btns[1].style.backgroundColor = 'pink';

// circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'lightgreen';
// }

// hearts.forEach((item) => {
//   item.style.backgroundColor = 'orange';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('I was hear');

// div.classList.add('black');

// wrapper.append(div);
// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[2].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// div.innerHTML = '<h1>Hello World!</h1>';
// div.textContent = '<h1>Hello World!</h1>';

// div.insertAdjacentHTML('beforebegin', '<h2>Good</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Good</h2>');
// div.innerHTML = '<h1>Hello World!</h1>';
// div.insertAdjacentHTML('beforeend', '<h2>Good</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Good</h2>');

// События и оброботчики

// const btn = document.querySelector('button');

// btn.onclick = function () {

//   alert('Click');
// };

// btn.addEventListener('click', () => {
//   alert('Click');
// });

// btn.addEventListener('click', (e) => {
// e.preventDefault();
//   // console.log('Hover');
//   // console.log(e.target);
//   e.target.remove();
// });

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.body.firstElementChild);
// console.log(
//   document.querySelector('[data-current="3"]').previousElementSibling
// );
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.body.lastElementChild);

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}
