document.addEventListener("DOMContentLoaded", function () {
  const btnControls = document.getElementById("controls");

  const stopLight = document.getElementById("stopLight");
  const slowLight = document.getElementById("slowLight");
  const goLight = document.getElementById("goLight");

  for (let i = 0; i < btnControls.children.length; i++) {
    btnControls.children[i].addEventListener("click", function (event) {
      let light;
      let checkClass = btnControls.children[i].innerText.toLowerCase();

      if (checkClass === "stop") {
        light = stopLight;
      } else if (checkClass === "slow") {
        light = slowLight;
      } else {
        light = goLight;
      }

      if (light.classList.toggle(checkClass)) {
        console.log(`${event.target.textContent} bulb on`);
      } else {
        console.log(`${event.target.textContent} bulb off`);
      }
    });
  }

  for (let i = 0; i < btnControls.children.length; i++) {
    btnControls.children[i].addEventListener("mouseenter", function (event) {
      console.log(`Entered ${event.target.textContent} button`);
    });
    btnControls.children[i].addEventListener("mouseleave", function (event) {
      console.log(`Left ${event.target.textContent} button`);
    });
  }
});
