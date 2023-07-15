// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
	const slideshowImages = document.querySelectorAll(".image-container .slideshow img");
	let currentImageIndex = 0;
	
	// Set the first image as active initially
	slideshowImages[currentImageIndex].classList.add("active");
	
	function showNextImage() {
		const currentImage = slideshowImages[currentImageIndex];
		currentImage.classList.remove("active");
		currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
		const nextImage = slideshowImages[currentImageIndex];
		nextImage.classList.add("active");
	}
	
	setInterval(showNextImage, 3000); // Change image every 3 seconds
});


// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
	const slideshowImages = document.querySelectorAll(".image-containers .slideshows img");
	let currentImageIndex = 0;
	
	// Set the first image as active initially
	slideshowImages[currentImageIndex].classList.add("active");
	
	function showNextImage() {
		const currentImage = slideshowImages[currentImageIndex];
		currentImage.classList.remove("active");
		currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
		const nextImage = slideshowImages[currentImageIndex];
		nextImage.classList.add("active");
	}
	
	setInterval(showNextImage, 3000); // Change image every 3 seconds
});
