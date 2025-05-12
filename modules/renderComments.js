import { comments } from './comments.js'
import { formatDate } from './formatDate.js'
import { initAddListenersLikeComment } from './initListeners.js'
import { initAddListenersReplyComment } from './initListeners.js'

export const renderComments = () => {
  const loadText = document.querySelector('.loadText')
  const commentBlock = document.querySelector('.comments')
  const commentsHtml = comments
    .map((comment, index) => {
      return `<li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>${formatDate(comment.date)}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.commentText}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likeCounter}</span>
            
            <button data-index="${index}" class="like-button ${
              comment.aktiveLike ? '-active-like' : ''
            }"></button>
           
          </div>
        </div>
      </li>`
    })
    .join('')

  commentBlock.innerHTML = commentsHtml
  loadText.style.display = 'none'
  initAddListenersLikeComment()
  initAddListenersReplyComment()
}
