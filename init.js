import { finalFx, gameFx } from "./script.js";

/// ----timer
let timer;
const start = document.getElementById("start-button");
const timerElement = document.getElementById("timer");
export const initFx = (seconds) => {
  const startFx = (seconds) => {
    let time = seconds;
    timer = setInterval(() => {
      timerElement.innerHTML = time;
      time--;
      if (time < 0) {
        finalFx(false);
        clearInterval(timer);
      } else {
        time;
      }
    }, 1000);
  };

  start.addEventListener("click", function () {
    this.classList.toggle("hidden");
    timerElement.classList.toggle("hidden");
    startFx(seconds);
    gameFx();
  });
};

export { timer, timerElement };
