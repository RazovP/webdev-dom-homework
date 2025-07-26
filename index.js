import { renderComments } from './modules/renderComments.js'
import { initAddListenerNewComment } from './modules/initListeners.js'
import { fetchComments } from './modules/api.js'

import { updateComments } from './modules/comments.js'
import { autorisationModal } from './modules/autorisationModal.js'


fetchComments().then((data) => {
  updateComments(data)
  renderComments()
})
// renderComments()
initAddListenerNewComment()
autorisationModal()

console.log('It works!')