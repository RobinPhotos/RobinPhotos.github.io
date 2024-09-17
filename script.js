// Set number of images and folder paths
const config = {
    imageCount: 179, // Adjust based on number of images
};

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Function to create gallery items (thumbnails)
    function createGalleryItem(index) {
        const imgNum = parseInt(index);
        const thumbnailSrc = './Archive1/img (' + imgNum + ').jpg';

        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = thumbnailSrc;
        img.alt = `Image ${index}`;

        galleryItem.appendChild(img);
		
        return galleryItem;
    }

    // Initialize gallery
    function initGallery() {
        for (let i = 1; i <= config.imageCount; i++) {
            const galleryItem = createGalleryItem(i);
            gallery.appendChild(galleryItem);
        }
    }

    // Initialize the gallery
    initGallery();
});
