//Initial Page Setup

function initialisation() {
	//setting cross icon in navigation menu as invisible
	document.getElementById("navCrossSVG").style.display = "none";

	//setting navigation menu items as invisible
	var navItems = document.getElementsByClassName("nav_item");
	for(var i = 0; i < navItems.length; i++) {
		navItems[i].style.display = "none";
	}
}

function burgerMenuTransform() {
	var menuOptions = document.getElementsByClassName("nav_item");
	var burgerIcon = document.getElementById("navBurgerSVG");
	var crossIcon = document.getElementById("navCrossSVG");

	for (var i = 0; i < menuOptions.length; i++) {
		if(menuOptions[i].style.display == "none") {
			menuOptions[i].style.display = "block";
			burgerIcon.style.display = "none";
			crossIcon.style.display = "inline";
		}
		else {
			menuOptions[i].style.display = "none";
			burgerIcon.style.display = "inline";
			crossIcon.style.display = "none";
		}
	}
}