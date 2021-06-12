/* variable declarations */
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu')
const body = document.body;
const nav = document.getElementById('nav');
const navEnd = document.getElementById('nav-end');
const headerEnd = document.getElementById('header-end');
const addToCartButton = document.getElementById('addToCart-product-template');
// const cartInputNum = document.getElementById('ajaxifyCart--num');
// console.log(cartInputNum);
// const cartInputAdd = document.getElementById('ajaxifyCart--add');
// const cartInputMinus = document.getElementById('ajaxifyCart--minus');
const cartCount = document.getElementById('cart-item-count');

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

function updateCartCount() {
  let currCount = parseInt(cartCount.textContent.trim());
  // if the initial cart count is less than zero, something is
  // wrong in shopify. highly unlikely event.
  if (currCount < 0) throw RangeError;
  try {
    // add the actual count from the ajaxcartitem btn.
    // if the removal of an item results in a value less
    // than zero, shopify should handle it but I will set the
    // cart count to zero just in case.
    currCount += 1; 
    if (currCount < 0) {currCount = 0;}
  } catch (err) {
    console.error(err);
  } finally {
    return currCount;
  }
}

try {
  addToCartButton.addEventListener('click', async function() {
    let cartItemCount = updateCartCount();
    let test = fetch('/cart.js', 
    {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {return data});
    let result = await test;
    console.log(result, result.item_count, cartItemCount);
  });
} catch (err) {
  if (err instanceof TypeError) {
    if (err.message.includes('addEventListener')) {
      // expected, do nothing
    }
  } else {
    console.error(err); // not expected
  }
}