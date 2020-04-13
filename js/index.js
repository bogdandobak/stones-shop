document.querySelector('.buy-shop').addEventListener('click', getAjaxHtml);

function getAjaxHtml() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.querySelector('.container').innerHTML = xhr.responseText;
    }
  };
  xhr.open('get', 'form.html', true);
  xhr.send();
}
