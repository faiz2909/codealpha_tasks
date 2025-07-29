const imageItems = document.querySelectorAll('.image-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const filterButtons = document.querySelectorAll('.filters button');

let currentImageIndex = 0;
let images = Array.from(imageItems);

function updateLightbox(index) {
  currentImageIndex = index;
  const img = images[index].querySelector('img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

imageItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    updateLightbox(index);
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = 'none';
};

nextBtn.onclick = () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateLightbox(currentImageIndex);
};

prevBtn.onclick = () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateLightbox(currentImageIndex);
};

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    images.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});