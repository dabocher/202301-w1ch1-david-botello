import { scoreFx, scoresObj } from "./scores.js";
import { timer, timerElement, initFx } from "./init.js";
import { addElementFx, secondChanceFx } from "./list-answers.js";
/* import { level, theme } from "./intro.js"; */
import { questions1, questions2 } from "./questions.js";
import { normalizeInputFx } from "./normalize.js";

// VARIABLES
let questionsArr = [...questions1];
const answerArr = [];
let indexActive = 0;
let degrees;
let round = 1;

// variables ELEMENTOS
const articleElement = document.querySelector(".container");
const finalElement = document.querySelector(".section__final");
const finalScoreElement = document.getElementById("final-score");
const questionElement = document.querySelector(".section__question-container");
const input = document.getElementById("answer");
const buttons = document.getElementById("buttons");
const answerMessage = document.getElementById("message");
const root = document.querySelector(":root");

// final del juego
export const finalFx = (value) => {
  articleElement.classList.add("hidden");
  setTimeout(() => {
    timerElement.innerHTML = 0;
    if (value) {
      scoresObj.totalScore += scoresObj.accumScore;
    } else {
      scoresObj.totalScore;
    }
    finalScoreElement.textContent = scoresObj.totalScore;
    articleElement.classList.add("display-none");
    finalElement.classList.toggle("hidden");
    finalElement.classList.toggle("display-none");
  }, 1000);
};

export const gameFx = () => {
  // inicio del juego
  questionElement.textContent = questionsArr[indexActive].question;
  input.value = "";
  let boxActive = document.querySelector(`.box--${indexActive}`);
  boxActive.classList.toggle("active");

  const showMessageFx = (value) => {
    switch (value) {
      case "pass":
        answerMessage.textContent = "PASASAPALABRA!";
        break;
      case true:
        answerMessage.textContent = "CORRECT!";
        break;
      case false:
        answerMessage.textContent = "WRONG!";
    }
  };

  const machineResponseFx = (value) => {
    answerArr.push(value);
    scoreFx(value);
    showMessageFx(value);
    if (round === 1) addElementFx(value);
    else secondChanceFx(value);
    boxActive.classList.toggle("active");
  };

  const roscoFx = () => {
    indexActive++;
    degrees = -13.8 * indexActive;
    root.style.setProperty("--rotate", degrees + "deg");
    if (indexActive === questionsArr.length) {
      indexActive = 0;
      round++;
    }
    //
    const checkRoscoFilled = questionsArr.every(
      (element) => element.status === 0
    );
    if (checkRoscoFilled) {
      finalFx(true);
      clearInterval(timer);
    } else {
      if (questionsArr[indexActive].status === 1) {
        questionElement.textContent = questionsArr[indexActive].question;
        boxActive = document.querySelector(`.box--${indexActive}`);
        boxActive.classList.toggle("active");
      } else {
        roscoFx();
      }
    }
  };

  // escucha del botón GUESS y del botón PASS y cotejo de la respuesta
  buttons.addEventListener("click", (e) => {
    e.preventDefault();
    const btnClicked = e.target.textContent;

    if (btnClicked === "guess") {
      const inputNormalized = normalizeInputFx(input.value);
      if (
        btnClicked === "guess" &&
        /*  input.value === questionsArr[indexActive].answer */
        inputNormalized === questionsArr[indexActive].answer
      ) {
        questionsArr[indexActive].status = 0;
        boxActive.classList.toggle("green");
        machineResponseFx(true);
      } else if (
        btnClicked === "guess" &&
        inputNormalized !== questionsArr[indexActive].answer
      ) {
        questionsArr[indexActive].status = 0;
        boxActive.classList.toggle("red");
        machineResponseFx(false);
      }
    } else {
      boxActive.classList.add("grey");
      machineResponseFx("pass");
    }
    input.value = "";
    roscoFx();
  });
};

const appFx = () => {
  initFx(120);
};
appFx();

export { indexActive, questionsArr };
