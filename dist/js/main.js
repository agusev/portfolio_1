// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menuMenu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
//  Set initial state of menu
let setMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!setMenu) {
		menuBtn.classList.add('close');
		menuMenu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		// Set menu state
		setMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menuMenu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		// Set menu state
		setMenu = false;
	}
}
