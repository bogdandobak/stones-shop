const modal = document.getElementById('modalShop');

const buttonClassic = document.getElementById('button-classic');
const buttonAnti = document.getElementById('button-anti');
const buttonWhiskey = document.getElementById('button-whiskey');

const span = document.getElementsByClassName('close-button')[0];

buttonClassic.onclick = function () {
  modal.style.display = 'block';
};
buttonAnti.onclick = function () {
  modal.style.display = 'block';
};
buttonWhiskey.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
