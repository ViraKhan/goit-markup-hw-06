(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector("[data-modal-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector("[data-modal-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
  })();
  
  // Burger menu logic
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-btn'),
    closeMenuBtn: document.querySelector('.mobile-menu-close'),
    mobileMenu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', () => {
    refs.mobileMenu.classList.add('is-open');
  });

  refs.closeMenuBtn.addEventListener('click', () => {
    refs.mobileMenu.classList.remove('is-open');
  });
})();
