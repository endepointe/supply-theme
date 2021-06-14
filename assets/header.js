/* variable declarations */
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu')
const body = document.body;
const nav = document.getElementById('nav');
const navEnd = document.getElementById('nav-end');
const headerEnd = document.getElementById('header-end');
const cartCount = document.getElementById('cart-item-count');
/**
 * 
 */
// sometimes easier with jquery, same result
$('#menu-btn').click(function () {
  menuBtn.classList.toggle('menu-btn');
  menuBtn.classList.toggle('menu-btn-clicked');
  body.classList.toggle('overflow-hidden'); 
  dropdownMenu.classList.toggle('show-dropdown-menu');
});
/* end #menu-btn event(s) */
/**
 * 
 */
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
/**
 * 
 */
/* 
  Cart Count Check
  Purpose: 
    - Detect changes to the item count.
    - Prevent the content from being changed to a non-numerical character.
*/
const config = {attributes: true, childList: true, subtree: false};
const regex = new RegExp('[^0-9]');
const fetchValue = async () => {
  let res = await fetch('/cart.js',{method: 'GET'})
  if (res.status === 200) {
    let data = await res.json();
    return data.item_count;
  }
}
const verifyCartCount = async function(ml, ob) {
  // if (parseInt(cartCount.textContent) > 0) {
  //   cartCount.classList.remove('hidden');
  // } else {
  //   cartCount.classList.add('hidden');
  // }
  // test the values of each cart item
  for (const m of ml) {
    // if true, non-numerical values have been found
    if (regex.test(m.target.textContent) === true) {
      console.error('Don\'t even try...');
      m.target.textContent = await fetchValue();
    }
    if (regex.test(m.target.attributes['data-value'].value) === true) {
      console.error('Don\'t even try...');
      m.target.attributes['data-value'].value = await fetchValue();
    }   
  }
}
const observer = new MutationObserver(verifyCartCount);
observer.observe(cartCount, config);
/* End Cart Count Check */