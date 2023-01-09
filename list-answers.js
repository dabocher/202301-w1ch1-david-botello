import { indexActive, questionsArr } from "./script.js";

export const addElementFx = (value) => {
  // 1- create element
  const listLetterElement = document.createElement("li");
  const listResultElement = document.createElement("li");
  // 2- add classes
  listLetterElement.classList.add(
    `section__words-revealed-list-letter--${indexActive}`
  );
  listResultElement.classList.add(
    `section__words-revealed-list-result--${indexActive}`
  );
  listLetterElement.textContent = `${questionsArr[
    indexActive
  ].letter.toUpperCase()}-`;
  if (value === "pass") {
    listResultElement.textContent = "...";
  } else {
    listResultElement.textContent = `${questionsArr[indexActive].answer}`;
  }
  // 3- insert element
  const appendLetterElement = document.getElementById("list-letters");
  const appendResultElement = document.getElementById("list-results");
  appendResultElement.appendChild(listResultElement);
  appendLetterElement.appendChild(listLetterElement);
};
export const secondChanceFx = (value) => {
  const secondChanceElement = document.querySelector(
    `.section__words-revealed-list-result--${indexActive}`
  );
  if (value === "pass") {
    secondChanceElement.textContent = "...";
  } else {
    secondChanceElement.textContent = `${questionsArr[indexActive].answer}`;
  }
};
