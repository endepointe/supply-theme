/* variable declarations */
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu')
const body = document.body;
const nav = document.getElementById('nav');
const navEnd = document.getElementById('nav-end');
const headerEnd = document.getElementById('header-end');
// if the menu is open, menuOpen will be true, else it will be false;
let menuOpen = false;

// sometimes easier with jquery, same result
$('#menu-btn').click(function () {
  menuBtn.classList.toggle('menu-btn');
  menuBtn.classList.toggle('menu-btn-clicked');
  body.classList.toggle('overflow-hidden'); 
  dropdownMenu.classList.toggle('show-dropdown-menu');
});
/* end #menu-btn event(s) */

/* nav opacity change after scroll*/
// Replace the nav opacity if the user has not scrolled the page below
// the nav y-coordinate. Otherwise, keep it opaque.
function changeNavBGColor(navY, headerY) {
  // remove the nav opacity if true
  if (navY >= headerY) {
    nav.classList.add('nav-after-scroll');
  }
  // if the navbar is above the header
  if (navY < headerY) {
    nav.classList.remove('nav-after-scroll');
  }
}
document.addEventListener('scroll', function(e) {
  let navEndRect = navEnd.getBoundingClientRect();
  let headerEndRect = headerEnd.getBoundingClientRect();
  changeNavBGColor(parseInt(navEndRect.y), parseInt(headerEndRect.y));
});
/* end nav opacity change after scroll */

const a = document.getElementById('addToCart-product-template');
console.log(a);
a.addEventListener('click', async function() {
  var test = fetch('/cart.js', 
  {
    method: "GET"
  })
  .then(res => res.json())
  .then(data => {return data});
  var result = await test;
  console.log(result, result.item_count);
});