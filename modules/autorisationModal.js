// modules/modal.js

import { authorizeUser } from "./autorisattion.js";

export function autorisationModal() {
  const loginButton = document.querySelector(".loginButton");
  const modal = document.getElementById("myModal");
  const closeModal = document.querySelector(".close");
  
  // Открытие модального окна
  loginButton.onclick = function() {
    modal.style.display = "block";
  }

  // Закрытие модального окна
  closeModal.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Обработка входа
  document.getElementById("submitLogin").onclick = function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
authorizeUser()
    // Здесь можно добавить логику проверки пользователя
    if (username && password) {
      console.log("Вход выполнен:", username);
      modal.style.display = "none";
      // Здесь можно добавить код для обработки входа
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  }
}
