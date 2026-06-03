document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slider__slide');
  const dots = document.querySelectorAll('.slider__dot');
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  
  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function changeSlide(index) {
    // 1. Убираем класс active у текущего слайда и точки
    slides[currentIndex].classList.remove('active');
    if (dots.length) dots[currentIndex].classList.remove('active');

    // 2. Рассчитываем корректный индекс (зацикливание)
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    // 3. Добавляем класс active новому слайду и новой точке
    slides[currentIndex].classList.add('active');
    if (dots.length) dots[currentIndex].classList.add('active');
  }

  // Клик по стрелочкам
  nextBtn.addEventListener('click', () => changeSlide(currentIndex + 1));
  prevBtn.addEventListener('click', () => changeSlide(currentIndex - 1));

  // Клик по точкам
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);
      changeSlide(targetIndex);
    });
  });
});