const mainEl = document.querySelector('main');
// is not a function means it uses an equal sign


mainEl.style.backgroundColor = 'var(--main-bg)';

const h1 = document.createElement('h1');
h1.innerHTML = 'SEI Rocks!';
mainEl.appendChild(h1);
mainEl.classList='flex-ctr';

