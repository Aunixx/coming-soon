document.addEventListener("DOMContentLoaded", () => {
  let wrapper = document.querySelector(".coming-soon");

  setTimeout(() => {
    gsap.to(wrapper, { opacity: 1, duration: 3 });
  }, 2000);

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
});
