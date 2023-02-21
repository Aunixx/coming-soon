document.addEventListener("DOMContentLoaded", () => {
  let bar = document.getElementById("bar");
  let hiddenTexts = document.getElementsByClassName("hidden");
  let wrapper = document.querySelector(".text-wrapper");

  setTimeout(() => {
    gsap.to(bar, { opacity: 1, duration: 2, delay: 3 });
    gsap.to(wrapper, { opacity: 1, duration: 3 });
  }, 3000);
  // setTimeout(
  //   () => gsap.to(wrapper, { opacity: 1, duration: 2, delay: 3 }),
  //   3000
  // );

  setOpacity(0);

  dragElement(bar);

  function setOpacity(offset) {
    for (let i = 0; i < hiddenTexts.length; i++) {
      let op = 1 - Math.abs(offset - hiddenTexts[i].offsetLeft) / 400;
      console.log(op);
      hiddenTexts[i].style.opacity = op;
    }
  }

  function dragElement(elmnt) {
    let dist = 0,
      currentPos = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();
      currentPos = e.clientX;

      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();

      dist = currentPos - e.clientX;
      currentPos = e.clientX;

      let updatedPos = elmnt.offsetLeft - dist;
      elmnt.style.left = updatedPos + "px";

      setOpacity(elmnt.offsetLeft);

      document.documentElement.style.setProperty("--cursorX", elmnt.style.left);
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});
