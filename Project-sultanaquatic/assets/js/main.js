
// slider auto next
var slider = {
  currentSlide: 0,
  slides: document.querySelectorAll('.slide'),

  showSlide: function(n) {
    this.slides[this.currentSlide].style.display = 'none';
    this.currentSlide = (n + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].style.display = 'block';
  },

  nextSlide: function() {
    this.showSlide(this.currentSlide + 1);
  },

  prevSlide: function() {
    this.showSlide(this.currentSlide - 1);
  },

  startSlideShow: function() {
    setInterval(() => {
      this.nextSlide();
    }, 1500);
  }
};

slider.showSlide(slider.currentSlide);
slider.startSlideShow();

// best seller hover thay đổi ảnh

const products = document.querySelectorAll('.product');

products.forEach((product) => {
const img = product.querySelector('img');
const originalSrc = img.src;
const hoverSrc = img.getAttribute('data-hover-src');

img.addEventListener('mouseover', () => {
  img.src = hoverSrc;
});

img.addEventListener('mouseout', () => {
  img.src = originalSrc;
});
});





