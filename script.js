const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxes);

showBoxes()

function showBoxes() {
  const triggerbottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const fromTop = box.getBoundingClientRect().top;

    if (fromTop < triggerbottom) {
      box.classList.add("center");
    } else {
      box.classList.remove("center");
    }
  })
}