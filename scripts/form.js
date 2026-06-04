// --- Логика Модального Окна (Формы записи) ---
  const modal = document.getElementById('booking-modal');
  const openModalBtns = document.querySelectorAll('.btn--primary, .card-btn');
  const closeModalBtn = document.getElementById('modal-close-btn');

  // Открытие модального окна при клике на ЛЮБУЮ кнопку "Записаться"
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); 
      modal.classList.add('is-active');
      document.body.classList.add('no-scroll'); 
    });
  });

  // Закрытие окна по клику на крестик
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  });

  // Закрытие окна при клике на область вне формы
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('is-active');
      document.body.classList.remove('no-scroll');
    }
  });