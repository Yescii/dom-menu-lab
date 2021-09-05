/* MY NOTES

 "ERROR is not a function", means it uses an equal sign

*/


const mainEl = document.querySelector('main');

// added a background color to main element
mainEl.style.backgroundColor = 'var(--main-bg)';

// added h1 tag to main element with content
const h1 = document.createElement('h1');
h1.innerHTML = 'SEI Rocks!'; 
mainEl.appendChild(h1);

//added a class to main element
mainEl.classList='flex-ctr';


//added a height of 100% to the nav element with a background color, and added css class 
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList= "flex-around";


