'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClodeModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // in brackets we DON'T write with '.aaa', here we need only String.  ||   with '.aaa' write ONLY  in queraSelector!
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnClodeModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  console.log(e.key);

  if (e.key === 'q' && !modal.classList.contains('hidden')) {
      closeModal();
  }
});
