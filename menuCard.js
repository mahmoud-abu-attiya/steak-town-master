let cards = document.querySelectorAll(".menu-page .card")
let overlay = document.querySelector(".overlay")

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let child = card.querySelector(".card-body .card-text")
    card.classList.add("pop-up")
    overlay.style.display = "block"
    console.log(child);
    child.classList.add("show-p")
    window.addEventListener("click", (e) => {
      if (e.target == overlay) {
        card.classList.remove("pop-up")
        overlay.style.display = ""
        child.classList.remove("show-p")
      }
    })
  })
})