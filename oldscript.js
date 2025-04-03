
"use strict";
// Код писать здесь
// const commentBlock = document.querySelector(".comments");
// const comments = [
//   { name: "Глеб Фокин", date: "12.02.22 12:18", commentText: "Это будет первый комментарий на этой странице", likeCounter: 3, aktiveLike: false },
//   { name: "Варвара Н.", date: "13.02.22 19:22", commentText: "Мне нравится как оформлена эта страница! ❤", likeCounter: 75, aktiveLike: true }
// ];

// const initLikeButton = () => {
//   const buttonElements = document.querySelectorAll(".like-button");
//   for (const buttonEl of buttonElements) {
//     buttonEl.addEventListener("click", (event) => {
//       event.stopPropagation();
//       const index = buttonEl.dataset.index;

//       if (comments[index].aktiveLike) {
//         comments[index].likeCounter--;
//         comments[index].aktiveLike = false;
//       } else {
//         comments[index].likeCounter++;
//         comments[index].aktiveLike = true;
//       }

//       renderComments();
//     })
//   }
// }

// const renderComments = () => {
//   const commentsHtml = comments.map((comment, index) => {

//     return `<li class="comment" data-index="${index}">
//       <div class="comment-header">
//         <div>${comment.name}</div>
//         <div>${comment.date}</div>
//       </div>
//       <div class="comment-body">
//         <div class="comment-text">
//           ${comment.commentText}
//         </div>
//       </div>
//       <div class="comment-footer">
//         <div class="likes">
//           <span class="likes-counter">${comment.likeCounter}</span>
          
//           <button data-index="${index}" class="like-button ${comment.aktiveLike ? "-active-like" : ""}"></button>
         
//         </div>
//       </div>
//     </li>`
//   }).join("");

//   commentBlock.innerHTML = commentsHtml;
//   initLikeButton();
//   callComment();


// }

// const callComment = () => {
// const commentElements = document.querySelectorAll('.comment');
//   commentElements.forEach(commentEl => {
//     commentEl.addEventListener('click', () => {
//       const index = commentEl.dataset.index;
//       const comment = comments[index];
//       const commentInput = document.querySelector('.add-form-text');

//       commentInput.value = `> ${comment.name} 
//       ${comment.commentText}`;

//     });
//   });
// }
// renderComments();

// const addButton = document.querySelector('.add-form-button');
// addButton.addEventListener("click", () => {
//   const nameInput = document.querySelector('.add-form-name');
//   const commentInput = document.querySelector('.add-form-text');

//   let hasError = false;

//   if (nameInput.value === '') {
//     nameInput.classList.add('input-error');
//     hasError = true;
//   }
//   if (commentInput.value === '') {
//     commentInput.classList.add('input-error');
//     hasError = true;
//   }

//   if (hasError) {
//     return;
//   }

//   const now = new Date();
//   const dateString = now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU');
//   comments[comments.length++] = { name: nameInput.value.replaceAll("<", "&lt;").replaceAll(">","&gt;"), date: dateString, commentText: commentInput.value.replaceAll("<", "&lt;").replaceAll(">","&gt;"), likeCounter: 0, aktiveLike: false }
//   nameInput.value = '';
//   commentInput.value = '';
//   commentInput.classList.remove('input-error');
//   nameInput.classList.remove('input-error');
//   renderComments();
// })
// console.log("It works!");