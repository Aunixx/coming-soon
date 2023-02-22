let nationIcons = document.querySelectorAll(".nation-icon");
console.log(window);
for (let i = 0; i < nationIcons.length; i++) {
  nationIcons[i].style.top = Math.random() * (window.innerHeight - 200);
  nationIcons[i].style.left = Math.random() * window.innerWidth - 200;
}

document.addEventListener("mousemove", (e) => {
  let bar = document.getElementById("bar");
  let hiddenTexts = document.getElementsByClassName("hidden");
  bar.style.left = e.clientX;
  bar.style.top = e.clientY;
  setOpacity(e.clientX, e.clientY);

  function setOpacity(offsetL, offsetT) {
    for (let i = 0; i < hiddenTexts.length; i++) {
      let op =
        2 -
        (+Math.abs(offsetL - hiddenTexts[i].offsetLeft) / 150 +
          Math.abs(offsetT - hiddenTexts[i].offsetTop) / 150);
      hiddenTexts[i].style.opacity = op;
    }
    // for (let i = 0; i < hiddenTexts.length; i++) {
    //   let op = 1 - Math.abs(offsetT - hiddenTexts[i].offsetTop) / 300;
    //   hiddenTexts[i].style.opacity = op;
    // }
  }
});

document.addEventListener("touchmove", (e) => {
  let bar = document.getElementById("bar");
  let hiddenTexts = document.getElementsByClassName("hidden");
  bar.style.left = e.clientX;
  bar.style.top = e.clientY;
  setOpacity(e.clientX, e.clientY);

  function setOpacity(offsetL, offsetT) {
    for (let i = 0; i < hiddenTexts.length; i++) {
      let op =
        2 -
        (+Math.abs(offsetL - hiddenTexts[i].offsetLeft) / 150 +
          Math.abs(offsetT - hiddenTexts[i].offsetTop) / 150);
      hiddenTexts[i].style.opacity = op;
    }
    // for (let i = 0; i < hiddenTexts.length; i++) {
    //   let op = 1 - Math.abs(offsetT - hiddenTexts[i].offsetTop) / 300;
    //   hiddenTexts[i].style.opacity = op;
    // }
  }
});

let textLength = 0;
let text = " Incoming Transmission from Kiirus being deciphered";
function type() {
  let textChar = text.charAt(textLength++);
  let paragraph = document.querySelector(".heading");
  let charElement = document.createTextNode(textChar);
  paragraph.appendChild(charElement);
  if (textLength < text.length + 1) {
    setTimeout("type()", 50);
  } else {
    text = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});
