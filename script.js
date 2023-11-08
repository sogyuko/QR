
function showImage(section) {
    const imageDisplay = document.querySelector('.image-display');
    imageDisplay.innerHTML = ''; // Clear previous image

    const img = document.createElement('img');
    img.src = section + '.png'; // Assuming images are named after sections
    img.alt = section;

    imageDisplay.appendChild(img);
}
