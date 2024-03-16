document.addEventListener("scroll", function() {
    const scrolled = window.scrollY;
    const parallaxLayers = document.querySelectorAll(".parallax-layer");
  
    parallaxLayers.forEach(function(layer, index) {
      const speed = (index + 1) * 0.5;
      const movement = -scrolled * speed;
      layer.style.transform = `translateZ(${movement}px) scale(${1 + index * 0.1})`;
    });
  });
  