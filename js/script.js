/* MY NOTES

 "ERROR is not a function", means it uses an equal sign

*/


const mainEl = document.querySelector('main');

// added a background color to main element
mainEl.style.backgroundColor = 'var(--main-bg)';

// add h1 tag to main element with content
const h1 = document.createElement('h1');
h1.innerHTML = 'SEI Rocks!'; 
mainEl.appendChild(h1);

//add a class to main element
mainEl.classList='flex-ctr';

