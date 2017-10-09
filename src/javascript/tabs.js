/**
 * Initializes all tab components in the document
 */
NMaterial.initTabs = function(){
	var tabs = document.querySelectorAll(".n-tabs");

	// Set the resize event to all tabs if there's any tab component in the document
	if(tabs.length > 0){
		window.addEventListener("resize", () => {
			resizeIndicators();
		});
	}

	for(let i = 0; tabs.length > i; i++){
		let tab             = tabs.item(i),
			tabSelects      = tab.querySelectorAll(".n-tab-select-item"),
			tabIndicator    = tab.querySelector(".n-tabs-indicator");

		// Give the first tab the class active as it will always be the first selected tab
		tabSelects.item(0).classList.add("n-active");

		// Check if there is a tab indicator in the tabs component
		// Indicators can be optional
		if(tabIndicator){
			tabIndicator.style.width = tabSelects.item(0).clientWidth + "px";
		}

		for(let t = 0; tabSelects.length > t; t++){
			var tabSelect = tabSelects.item(t);

			// Isolate the element iterated to avoid select duplication
			(() => {
				var item = t;

				tabSelect.addEventListener("click", () => {
					selectTab(tab, item);
				});	
			})();
		}
	}

	/**
	 * Selects the tab item calculated from a multiplier index
	 * 
	 * @param  {Element} component  The selected tab component to execute the transition
	 * @param  {Number}  multiplier The multiplier index of the tab clicked
	 */
	function selectTab(component, multiplier){
		var tabItems        = component.querySelectorAll(".n-tab-content-item"),
			tabSelects      = component.querySelectorAll(".n-tab-select-item"),
			tabIndicator    = component.querySelector(".n-tabs-indicator"),
			tabContent      = component.querySelector(".n-tabs-content"),
			tabContentWidth = tabContent.clientWidth;

		// TODO: Improve this
		if(tabIndicator){
			var tabIndicatorWidth = tabIndicator.clientWidth,
				indicatorOffset   = (tabIndicatorWidth * multiplier);

			tabIndicator.style.transform = `translateX(${indicatorOffset}px)`;
			

			for(let i = 0; tabSelects.length > i; i++){
				var tabSelect = tabSelects.item(i);

				// Give the active class to selected tab
				if(i == multiplier){
					tabSelect.classList.add("n-active");
				}

				// Remove the active class to the rest of the tabs if the contain it
				else if(tabSelect.classList.contains("n-active")){
					tabSelect.classList.remove("n-active");
				}
			}
		}
		
		for(let i = 0; tabItems.length > i; i++){
			var tabItem = tabItems.item(i),
				offset  = (tabContentWidth * multiplier) * -1;

			// Animate the transition between tab contents when selected a tab
			tabItem.style.transform = `translateX(${offset}px)`;
		}
	}

	/**
	 * Resizes all tab indicators whenever the browser changes its size
	 */
	function resizeIndicators(){
		for(let i = 0; tabs.length > i; i++){
			var tab          = tabs.item(i),
				tabSelect    = tab.querySelector(".n-tab-select-item"),
				tabIndicator = tab.querySelector(".n-tabs-indicator");

			if(tabIndicator){
				var translateX = getTranslateX(tabIndicator),
					offset     = (translateX - tabSelect.clientWidth) * -1;

				// Give the indicator the new size
				tabIndicator.style.width = tabSelect.clientWidth + "px";

				// Reposition the indicator offset whenever it's offset is not in the first tab
				if(translateX != 0){
					tabIndicator.style.transform = `translateX(${tabSelect.clientWidth + offset}px)`;
				}
			}
		}
	}

	/**
	 * Gets the translateX transform value from a provided element
	 * 
	 * @param  {Element} element The element where to extract the computed value
	 * @return {Number}          The computed value of translateX
	 */
	function getTranslateX(element){
		var style  = window.getComputedStyle(element),
			matrix = new WebKitCSSMatrix(style.webkitTransform);

		return matrix.m41;
	}
};