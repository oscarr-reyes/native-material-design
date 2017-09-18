/**
 * Initializes all submenu components in the document
 */
NMaterial.initSubMenus = function(){
	var menuTriggers = document.querySelectorAll(".n-sub-menu-trigger");

	for(i = 0; menuTriggers.length > i; i++){
		var menuTrigger = menuTriggers.item(i);

		menuTrigger.addEventListener("click", function(){
			var attr = this.attributes.getNamedItem("data-menu-target");

			// Toggle hidden class to the target element
			if(attr){
				var target = document.getElementById(attr.value);

				target.classList.toggle("hidden");
			}

			// No target was set in the element
			else{
				console.error("no menu target on node:", this);
			}
		});
	}
}