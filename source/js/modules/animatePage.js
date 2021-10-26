export const animateLoadedPage = () => {

  const handlers = {
    animtop : (el) => {
      let introMessage = el.querySelector(".intro__message");
      introMessage.classList.add("intro__message--anim");
    },
    animgame: (el) => {
      const inputQuestion = el.querySelector(".chat__footer");
      inputQuestion.classList.add("chat__footer--anim");
     }
  }

  document.body.addEventListener('screenChanged', (e) => {
    let nameFunction ='anim'+e.detail.screenName
    if (handlers[nameFunction]) {
      setTimeout(() => {
        handlers[nameFunction](e.detail.screenElement)

      }, 500)
    }
  })
}

