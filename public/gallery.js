document.addEventListener('DOMContentLoaded', function() {
  // Array of image objects with URL and alt text
  const images = [
    { url: 'public/rothko_1.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_2.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_3.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_4.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_5.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_6.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_7.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_8.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_9.jpeg', alt: 'Lookbook Image 1' },
    { url: 'public/rothko_10.jpeg', alt: 'Lookbook Image 1' },

    
    // Add more image objects as needed
  ];

  // Get the gallery grid container element
  const galleryGrid = document.getElementById('gallery-grid');

  // Loop over the images array and create gallery items
  images.forEach(image => {
    // Create a div element for each gallery item
    const itemDiv = document.createElement('div');
    itemDiv.className = 'gallery-item';

    // Create an image element
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = image.alt;

    // Append the image element to the item div
    itemDiv.appendChild(imgElement);

    // Append the item div to the gallery grid container
    galleryGrid.appendChild(itemDiv);
  });
});