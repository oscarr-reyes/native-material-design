/**
 * Initializes all submenu components in the document
 */
NMaterial.initSubMenus = function(){
	var menuTriggers = document.querySelectorAll(".n-sub-menu-trigger");

	for(let i = 0; menuTriggers.length > i; i++){
		let menuTrigger = menuTriggers.item(i);

		menuTrigger.addEventListener("click", function(){
			let attr = this.attributes.getNamedItem("data-menu-target");

			// Toggle hidden class to the target element
			if(attr){
				let target = document.getElementById(attr.value);

				target.classList.toggle("hidden");
			}

			// No target was set in the element
			else{
				console.error("no menu target on node:", this);
			}
		});
	}
};