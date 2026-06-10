// --- Логика слайдера ---
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider__slide');
  const dots = document.querySelectorAll('.slider__dot');
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  
  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function changeSlide(index) {
    slides[currentIndex].classList.remove('active');
    if (dots.length) dots[currentIndex].classList.remove('active');

    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slides[currentIndex].classList.add('active');
    if (dots.length) dots[currentIndex].classList.add('active');
  }

  // клик по стрелочкам
  nextBtn.addEventListener('click', () => changeSlide(currentIndex + 1));
  prevBtn.addEventListener('click', () => changeSlide(currentIndex - 1));

  // клик по точкам
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);
      changeSlide(targetIndex);
    });
  });
});



// --- Логика увеличения фото слайдера по клику  ---
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider__slide');
  const imageModal = document.getElementById('image-modal');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const closeImageModalBtn = document.getElementById('image-modal-close-btn');

  // функция открытия модального окна
  slides.forEach(slide => {
    slide.style.cursor = 'zoom-in'; 
    
    slide.addEventListener('click', function() {
      fullscreenImage.src = this.src;
      fullscreenImage.alt = this.alt;
      
      imageModal.classList.add('is-active');
      document.body.classList.add('no-scroll');
    });
  });

  // функция закрытия модального окна
  const closeImageModal = () => {
    imageModal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
    
    setTimeout(() => {
      fullscreenImage.src = '';
    }, 300);
  };

  closeImageModalBtn.addEventListener('click', closeImageModal);

  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal || e.target.classList.contains('image-modal-content')) {
      closeImageModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.classList.contains('is-active')) {
      closeImageModal();
    }
  });
});