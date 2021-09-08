/* MY NOTES

 "is not a function" error, means it uses an equal sign, not '( )'

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



// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

  //added links to the nav element, links added content from the menu data structure porperties of text and href.

  menuLinks.forEach((link) => {
    a = document.createElement("a");
      a.innerHTML= link.text;
      a.setAttribute("href", link.href)
      topMenuEl.appendChild(a);

  });


//Part 2 of lab
 const subMenuEl = document.getElementById('sub-menu');
 subMenuEl.style.height = '100%';
 subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList= 'flex-around';
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';
