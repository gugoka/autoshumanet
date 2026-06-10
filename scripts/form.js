// --- Логика формы записи ---
const modal = document.getElementById('booking-modal');
const openModalBtns = document.querySelectorAll('.btn--primary, .card-btn');
const closeModalBtn = document.getElementById('modal-close-btn');

// открытие формы при клике на ЛЮБУЮ кнопку "Записаться"
openModalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('is-active');
    document.body.classList.add('no-scroll');
  });
});

// закрытие по клику на крестик
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
});

// закрытие при клике на область вне формы
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }
});

// закрытие по Esc
modal.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' & modal.classList.contains('is-active')) {
    modal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }
});