import { comments, updateComments } from './comments.js'
import { renderComments } from './renderComments.js'
import { escHtml } from './escHtml.js'
import { postComment } from './api.js'

export const initAddListenersLikeComment = () => {
  const buttonElements = document.querySelectorAll('.like-button')
  for (const buttonEl of buttonElements) {
    buttonEl.addEventListener('click', (event) => {
      event.stopPropagation()
      const index = buttonEl.dataset.index

      if (comments[index].aktiveLike) {
        comments[index].likeCounter--
        comments[index].aktiveLike = false
      } else {
        comments[index].likeCounter++
        comments[index].aktiveLike = true
      }

      renderComments()
    })
  }
}

export const initAddListenersReplyComment = () => {
  const commentElements = document.querySelectorAll('.comment')
  commentElements.forEach((commentEl) => {
    commentEl.addEventListener('click', () => {
      const index = commentEl.dataset.index
      const comment = comments[index]
      const commentInput = document.querySelector('.add-form-text')

      commentInput.value = `> ${comment.name} 
          ${comment.commentText}`
    })
  })
}

export const initAddListenerNewComment = () => {
  const addButton = document.querySelector('.add-form-button')
   const loadTextComment = document.querySelector('.loadTextComment');
  const addForm = document.querySelector('.add-form');
  addButton.addEventListener('click', () => {
    const nameInput = document.querySelector('.add-form-name')
    const commentInput = document.querySelector('.add-form-text')

    let hasError = false

    if (nameInput.value === '') {
      nameInput.classList.add('input-error')
      hasError = true
    }
    if (commentInput.value === '') {
      commentInput.classList.add('input-error')
      hasError = true
    }

    if (hasError) {
      return
    }
    loadTextComment.style.display = 'block';
    addForm.style.display = 'none';



    postComment(escHtml(nameInput.value), escHtml(commentInput.value)).then(
      (data) => {
        updateComments(data)
        nameInput.value = ''
        commentInput.value = ''
        commentInput.classList.remove('input-error')
        nameInput.classList.remove('input-error')

        loadTextComment.style.display = 'none';
        addForm.style.display = 'flex';
        renderComments()
      },
    )


  })
}
