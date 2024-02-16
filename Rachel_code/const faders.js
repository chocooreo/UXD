document.addEventListener("DOMContentLoaded", function(event) {
	var fadeIns = document.querySelectorAll(".fade-in");
  
	function fadeInElements() {
	  for (var i = 0; i < fadeIns.length; i++) {
		var element = fadeIns[i];
		var elementTop = element.getBoundingClientRect().top;
		var elementBottom = element.getBoundingClientRect().bottom;
  
		// Check if the element is within the viewport
		if (elementTop < window.innerHeight && elementBottom >= 0) {
		  element.classList.add("fade-in-visible");
		} else {
		  element.classList.remove("fade-in-visible");
		}
	  }
	}

	const appearOptions ={
		threshold:2,
		rootMargin: "0px 0px -800px 0px"
	};
  
	// Initial check when the page loads
	fadeInElements();
  
	// Check on scroll
	window.addEventListener("scroll", fadeInElements);
  });