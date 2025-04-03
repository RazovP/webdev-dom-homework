import { comments } from "./comments.js";
import { renderComments } from "./renderComments.js";
import { escHtml } from "./escHtml.js";

export const initLikeButton = () => {
  const buttonElements = document.querySelectorAll(".like-button");
  for (const buttonEl of buttonElements) {
    buttonEl.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = buttonEl.dataset.index;

      if (comments[index].aktiveLike) {
        comments[index].likeCounter--;
        comments[index].aktiveLike = false;
      } else {
        comments[index].likeCounter++;
        comments[index].aktiveLike = true;
      }

      renderComments();
    });
  }
};

export const callComment = () => {
  const commentElements = document.querySelectorAll(".comment");
  commentElements.forEach((commentEl) => {
    commentEl.addEventListener("click", () => {
      const index = commentEl.dataset.index;
      const comment = comments[index];
      const commentInput = document.querySelector(".add-form-text");

      commentInput.value = `> ${comment.name} 
          ${comment.commentText}`;
    });
  });
};

export const newComment = () =>{
const addButton = document.querySelector(".add-form-button");
addButton.addEventListener("click", () => {
  const nameInput = document.querySelector(".add-form-name");
  const commentInput = document.querySelector(".add-form-text");

  let hasError = false;

  if (nameInput.value === "") {
    nameInput.classList.add("input-error");
    hasError = true;
  }
  if (commentInput.value === "") {
    commentInput.classList.add("input-error");
    hasError = true;
  }

  if (hasError) {
    return;
  }

  const now = new Date();
  const dateString =
    now.toLocaleDateString("ru-RU") + " " + now.toLocaleTimeString("ru-RU");
  comments[comments.length++] = {
    name: escHtml(nameInput.value),
    date: dateString,
    commentText: escHtml(commentInput.value),
    likeCounter: 0,
    aktiveLike: false,
  };
  nameInput.value = "";
  commentInput.value = "";
  commentInput.classList.remove("input-error");
  nameInput.classList.remove("input-error");
  renderComments();
});
}