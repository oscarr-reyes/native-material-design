/**
 * Initializes all menu components in the document
 */
NMaterial.initMenus = function() {
	var menus = document.querySelectorAll(".n-menu");

	for(i = 0; menus.length > i; i++){
		var menu = menus.item(i),
			trigger = menu.querySelector(".n-menu-trigger"),
			list = menu.querySelector(".n-menu-list");

		// Toggle menu list when trigger is clicked
		trigger.addEventListener("click", function(){
			list.classList.toggle("n-hidden");
		});

		list.addEventListener("click", function(){
			this.classList.add("n-hidden");
		});
	}
}