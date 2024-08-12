// Получаем элементы из DOM
const modal = document.getElementById("modal");
const btn = document.querySelector(".button-text"); // Находим кнопку по классу .button-text
const closeBtn = document.querySelector(".close"); // Находим кнопку закрытия по классу .close

// Открываем модальное окно при нажатии на кнопку
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Закрываем модальное окно при нажатии на кнопку закрытия
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Закрываем модальное окно при нажатии вне его области
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
