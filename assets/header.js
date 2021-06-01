//const menuBtn = document.getElementById('menu-btn');
const navDropdownMenu = document.getElementById('nav-dropdown-menu')


// EVENT LISTENERS
// menuBtn.addEventListener('click', function () {
//   console.log('drop the menu')
// })

$('#menu-btn').click(function () {
  console.log(navDropdownMenu.style, navDropdownMenu.offsetHeight)
  navDropdownMenu.classList.toggle('show-dropdown-menu');
})