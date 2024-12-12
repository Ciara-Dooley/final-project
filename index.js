let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
  count += 1
  countEl.textContent = count
  checkPerfectScore();
}


function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

//new part in particlar the part about //
const questions = [
  "chose an emojie with a smile?",
  "pick an emojie wich has eyeglasses?",
  "chose an emojie with horns ?",
  "chose an emojie with a monkey?",
  "chose an emojie with hearts?"


];

let currentQuestionIndex = 0;
let questionInterval;

document.getElementById('showQuestionButton').addEventListener('click', function () {

  showQuestion();


  questionInterval = setInterval(changeQuestion, 15000);
});

function showQuestion() {
  document.getElementById('question').innerText = questions[currentQuestionIndex];
}

function changeQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  showQuestion();
}

//NEW PART//

let perfectscore = document.getElementById("perfectscore")

function checkPerfectScore(){
  if (count == 5) {
    perfectscore.hidden = false;
  }
  else {
    perfectscore.hidden = true;
  }
}
//setting page.html ?????//
