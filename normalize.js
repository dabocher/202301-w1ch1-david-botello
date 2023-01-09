export const normalizeInputFx = function (input) {
  if (!input) {
    return "";
  } else if (input === "pass") {
    return "pass";
  } else {
    const inputTLC = input.toLowerCase();
    const wordsArr = inputTLC.split(" ");
    const wordsUpper = []; // array donde meteremos las variaciones de las palabras
    for (const elem of wordsArr) {
      wordsUpper.push(elem[0].toUpperCase() + elem.slice(1));
    }
    return wordsUpper.join(" ");
  }
};
