function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.toggle('show'),
  document.body.style.overflow = 'hidden';

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.toggle('show'),
  document.body.style.overflow = ''; 
}

function modal(triggerSelector, modalSelector, modalTimerId) {

const modalTrigger = document.querySelectorAll(triggerSelector),
modal = document.querySelector(modalSelector),
modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') === '') {
      closeModal(modalSelector);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
  }
});

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1)
      {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
      }
}

window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};