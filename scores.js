// SCORES
// variables
const scoresObj = {
  wordPoints: 1,
  accumScore: 0,
  totalScore: 0,
};

let chainedSuccessArr = [];
let nextPointsDisplay = document.getElementById("next-score");
const accumScoreDisplay = document.getElementById("accum-score");
const totalScoreDisplay = document.getElementById("total-score");

// Word Points only for correct answer
export const scoreFx = (value) => {
  const resetScoresFx = () => {
    scoresObj.accumScore = 0;
    accumScoreDisplay.textContent = scoresObj.accumScore;
    totalScoreDisplay.textContent = scoresObj.totalScore;
    chainedSuccessArr.splice(0, chainedSuccessArr.length);
    scoresObj.wordPoints = 1;
    nextPointsDisplay.textContent = scoresObj.wordPoints;
  };
  const calcAccFx = (value) => {
    if (value === "pass") {
      scoresObj.totalScore += scoresObj.accumScore;
      resetScoresFx();
    } else if (value) {
      chainedSuccessArr.push(chainedSuccessArr.length + 1);
      scoresObj.accumScore = chainedSuccessArr.reduce(
        (acc, curr) => acc + curr
      );
      accumScoreDisplay.textContent = scoresObj.accumScore;
      scoresObj.wordPoints++;
      nextPointsDisplay.textContent = scoresObj.wordPoints;
    } else {
      resetScoresFx();
    }
  };
  calcAccFx(value);
};

export { scoresObj };
