document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content img');
    const closeBtn = document.querySelector('.close-btn');
  
    gridItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const imgSrc = item.querySelector('img').src;
        lightboxContent.src = imgSrc;
        lightbox.style.display = 'flex';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  });
  