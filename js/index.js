const modal = document.querySelector('.modal');

const buttonClassic = document.querySelector('.button-classic');
const buttonAnti = document.querySelector('.button-anti');
const buttonWhiskey = document.querySelector('.button-whiskey');

const closeButton = document.getElementsByClassName('close-button')[0];

buttonClassic.addEventListener('click', function () {
  modal.style.display = 'block';
});

buttonAnti.addEventListener('click', function () {
  modal.style.display = 'block';
});
buttonWhiskey.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
