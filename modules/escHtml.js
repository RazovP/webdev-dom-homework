export function escHtml(inputTxt) {
    return inputTxt
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
  }