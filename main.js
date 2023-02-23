document.addEventListener("DOMContentLoaded", () => {
  let bar = document.getElementById("bar");
  let mouse = document.querySelector(".mouse");
  let hiddenTexts = document.getElementsByClassName("hidden");
  let wrapper = document.querySelector(".coming-soon");

  setTimeout(() => {
    // gsap.to(bar, { opacity: 1, duration: 2, delay: 3 });
    gsap.to(mouse, { opacity: 1, duration: 2, delay: 10 });
    gsap.to(wrapper, { opacity: 1, duration: 3 });
  }, 2000);
  // setTimeout(
  //   () => gsap.to(wrapper, { opacity: 1, duration: 2, delay: 3 }),
  //   3000
  // );
  const container = document.querySelector(".top-wrapper");
  const divs = Array.from(container.children);

  let currentDivIndex = 0;

  function showDiv() {
    const nextDivIndex = (currentDivIndex + 1) % divs.length;

    divs[currentDivIndex].classList.remove("active");

    divs[nextDivIndex].classList.add("active");

    currentDivIndex = nextDivIndex;
  }

  divs[currentDivIndex].classList.add("active");

  setInterval(showDiv, 8000);
  setOpacity(0);

  dragElement(bar);

  function setOpacity(offset) {
    for (let i = 0; i < hiddenTexts.length; i++) {
      let op = 1 - Math.abs(offset - hiddenTexts[i].offsetLeft) / 200;
      hiddenTexts[i].style.opacity = op;
    }
  }

  function dragElement(elmnt) {
    console.log(elmnt, "elmnt");
    let dist = 0,
      currentPos = 0;
    bar.style.cursor = "grab";
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();
      bar.style.cursor = "grab";

      currentPos = e.clientX;

      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      mouse.style.display = "none";
      bar.style.cursor = "grabbing";
      dist = currentPos - e.clientX;
      currentPos = e.clientX;
      let updatedPos = elmnt.offsetLeft - dist;
      elmnt.style.left = updatedPos + "px";
      setOpacity(elmnt.offsetLeft);
      document.documentElement.style.setProperty("--cursorX", elmnt.style.left);
    }

    function closeDragElement() {
      bar.style.cursor = "grab";

      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  let position = 0;
  let direction = 25;
  bar.style.opacity = 0;
  const animate = () => {
    position += direction;
    if (position > window.innerWidth - (bar.offsetWidth + 200)) {
      direction = -25;
    } else if (position < 200) {
      direction = 25;
    }
    bar.style.left = position + "px";
    setOpacity(bar.offsetLeft);

    window.requestAnimationFrame(animate);
  };

  animate();
});
function setOpacity(offset) {
  for (let i = 0; i < hiddenTexts.length; i++) {
    let op = 1 - Math.abs(offset - hiddenTexts[i].offsetLeft) / 200;
    hiddenTexts[i].style.opacity = op;
  }
}

// document.addEventListener("mousemove", (e) => {
//   let bar = document.getElementById("bar");
//   let hiddenTexts = document.getElementsByClassName("hidden");
//   bar.style.left = e.clientX;
//   bar.style.top = e.clientY;
//   setOpacity(e.clientX, e.clientY);

// function setOpacity(offsetL, offsetT) {
//   for (let i = 0; i < hiddenTexts.length; i++) {
//     let op =
//       2 -
//       (+Math.abs(offsetL - hiddenTexts[i].offsetLeft) / 200 +
//         Math.abs(offsetT - hiddenTexts[i].offsetTop) / 200);
//     hiddenTexts[i].style.opacity = op;
//     console.log(
//       2 -
//         (+Math.abs(offsetL - hiddenTexts[0].offsetLeft) / 200 +
//           Math.abs(offsetT - hiddenTexts[0].offsetTop) / 200)
//     );
//   }
//   // for (let i = 0; i < hiddenTexts.length; i++) {
//   //   let op = 1 - Math.abs(offsetT - hiddenTexts[i].offsetTop) / 300;
//   //   hiddenTexts[i].style.opacity = op;
//   // }
// }
// });
