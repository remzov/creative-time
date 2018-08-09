function Menu(openMenu, closeMenu, menu) {

	openMenu.addEventListener('click', () => {
		openMenu.hidden = true;
		menu.classList.add('menu_isOpened');
	});

	closeMenu.addEventListener('click', () => {
		menu.classList.remove('menu_isOpened');
		openMenu.hidden = false;
	});
	
}

export default Menu;