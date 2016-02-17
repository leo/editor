(function () {
  window.addEventListener('load', () => {
    if (document.contentEditable !== undefined && document.execCommand !== undefined) {
      console.error('HTML5 not supported!')
    } else {
      document.execCommand('styleWithCSS', false, true)
    }
  }, false)

  const buttons = document.querySelectorAll('text-editor nav a')

  function runCommand (event) {
    var method = this.getAttribute('href').split('#')[1]

    document.execCommand(method, false, null)
    event.preventDefault()
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', runCommand)
  }
})()
