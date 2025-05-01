import { renderComments } from './modules/renderComments.js'
import { initAddListenerNewComment } from './modules/initListeners.js'
import { fetchComments } from './modules/api.js'

import { updateComments } from './modules/comments.js'
fetchComments().then((data) => {
  updateComments(data)
  renderComments()
})
// renderComments()
initAddListenerNewComment()

console.log('It works!')
