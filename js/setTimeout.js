'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  let timerId,
    i = 0;

  btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000);
  });

  function logger() {
    if (i === 4) {
      clearInterval(timerId);
      console.log('end');
    }
    console.log('text');
    i++;
  }
});
