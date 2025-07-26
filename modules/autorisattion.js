// autorisattion.js

// Экспортируем функции для использования в других модулях
export async function authorizeUser() {
  const loginInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const authErrorElem = document.getElementById('authError');


  const login = loginInput.value.trim();
  const password = passwordInput.value.trim();

  authErrorElem.textContent = '';

  if (!login || !password) {
    authErrorElem.textContent = 'Пожалуйста, заполните логин и пароль.';
    return;
  }

  try {
    const response = await fetch('https://wedev-api.sky.pro/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ login, password })
    });
    console.log(JSON.stringify({ login, password }))

    if (response.status === 201) {
      const data = await response.json();
      const token = data.user.token;
      console.log('Авторизация успешна. Токен:', token);

      // Сохраняем токен
      localStorage.setItem('authToken', token);

      onUserAuthorized();
    } else if (response.status === 400) {
      const errorData = await response.json();
      console.error('Ошибка авторизации:', errorData);
      authErrorElem.textContent = 'Неверный логин или пароль.';
    } else {
      authErrorElem.textContent = 'Ошибка сервера. Попробуйте позже.';
    }
  } catch (error) {
    authErrorElem.textContent = 'Ошибка сети. Попробуйте позже.';
    console.error(error);
  }
}

function onUserAuthorized() {
  // Скрываем форму авторизации и показываем другую часть интерфейса
  const authForm = document.querySelector('.autorisationForm');
  const addForm = document.querySelector('.add-form');

  if (authForm && addForm) {
    authForm.style.display = 'none';
    addForm.style.display = 'block';
  } else {
    console.warn('Элементы формы не найдены.');
  }
}

export function submitComment() {
  const commentTextElem = document.getElementById('commentText');
  if (!commentTextElem) {
    console.error('Элемент commentText не найден.');
    return;
  }

  const commentText = commentTextElem.value.trim();

  if (!commentText) {
    alert('Комментарий не может быть пустым.');
    return;
  }

  const token = localStorage.getItem('authToken');

  console.log('Отправляем комментарий:', commentText, 'с токеном:', token);

  // Здесь можно отправить комментарий на сервер
  // /*
  // fetch('URL_для_комментариев', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   },
  //   body: JSON.stringify({ text: commentText })
  // }).then(response => /* обработка */).catch(error => /* обработка */);
  // */
}