// class to make answer object
class Answer {
  #name;
  #imgSrc;
  constructor(name, imgSrc) {
    this.#name = name;
    this.#imgSrc = imgSrc;
  }
  get name() {
    return this.#name;
  }
  get imgSrc() {
    return this.#imgSrc;
  }
}

//game section
// some of the names are arrays because the character have multiple names
const answerBank = [
  new Answer(["diluc"], "./img/diluc.png"),
  new Answer(["alhaitham"], "./img/alhaitham.png"),
  new Answer(["ayaka", "kamisato"], "./img/ayaka.png"),
  new Answer(["childe", "tartaglia", "ajax"], "./img/childe.png"),
  new Answer(["hu", "tao", "hutao"], "./img/hutao.png"),
  new Answer(["kaveh"], "./img/kaveh.png"),
  new Answer(["kokomi", "sangonomiya"], "./img/kokomi.png"),
  new Answer(["neuvillette"], "./img/neuvillette.png"),
  new Answer(
    ["raiden", "shougun", "shogun", "shoogun", "ei"],
    "./img/raiden.png"
  ),
  new Answer(["xiao"], "./img/xiao.png"),
  new Answer(["yae", "miko", "yaemiko"], "./img/yaemiko.png"),
  new Answer(["yoimiya", "naganohara"], "./img/yoimiya.png"),
  new Answer(["zhongli"], "./img/zhongli.png"),
];

// document elements
const answerArea = document.querySelector("#answer-area");
// paragraph in answer area
const answerH2 = answerArea.querySelector("h2");
// img in answer area
const imgDiv = document.querySelector(".img-area");
// form
const form = document.getElementById("user-guess-form");
// text input
const userInput = document.getElementById("user-guess");
// button
const btn = document.querySelector("button");

// store question
// const question = answerBank[8];
const question = generateQuestion(answerBank);
let isClick = false;

setUpGame(imgDiv, answerH2, question.imgSrc);

// function to set up game
function setUpGame(imgDiv, answerText, imgSrc) {
  answerText.textContent = "???";

  const imgBlack = document.createElement("img");
  // set img src of image
  imgBlack.setAttribute("src", imgSrc);
  //set style of images
  imgBlack.classList.add("img-black");
  //append img to div
  imgDiv.appendChild(imgBlack);
}
function generateQuestion(arr) {
  // store random index
  const index = Math.floor(Math.random() * arr.length);
  // return object in array;
  return arr[index];
}
// // create random questions
// function createQuestionBank(answerBank) {
//   const questionBankIndexes = [];
//   const questionsBank = [];
//   // add random indexes into questionBankIndexes
//   while (questionBankIndexes.length < 5) {
//     const index = getRandomIndex(answerBank);
//     // checks if arr already contains index (don't want duplicates)
//     if (!questionBankIndexes.includes(index)) {
//       questionBankIndexes.push(index);
//     }
//   }
//   // add information into questionsBank
//   questionBankIndexes.forEach((index) => questionsBank.push(answerBank[index]));
//   return questionsBank;
// }
// check if the user is right or wrong
function checkAnswer(userGuess, answer) {
  if (userGuess.includes(" ")) {
    let guess = userGuess.split(" ");
    return answer.includes(guess[0].toLowerCase());
  } else {
    return answer.includes(userGuess.toLowerCase());
  }
}
function displayAnswer(answerText, answer) {
  if (answer.length > 1 && !answer.includes("childe")) {
    answerText.textContent = `${capitalizeName(answer[0])} ${capitalizeName(
      answer[1]
    )}`;
  } else if (answer.length > 1 && answer.includes("childe")) {
    answerText.textContent = capitalizeName(answer[1]);
  } else {
    answerText.textContent = capitalizeName(answer[0]);
  }
  imgDiv.lastChild.classList.replace("img-black", "img-normal");
}
// make name capitalized
function capitalizeName(name) {
  const firstLetter = name[0].toUpperCase();
  const remainingLetters = name.slice(1);
  return firstLetter + remainingLetters;
}
//show if the user won
function showResults(result) {
  const h2 = document.createElement("h2");
  if (result) {
    h2.textContent = "You won!! Play again?";
  } else {
    h2.textContent = "You lost!! Play again?";
  }
  return h2;
}

// show replay button
function displayReplayBtn (element) {
  // create new button tag
  const btn = document.createElement("button");
  // add text in button tag
  btn.textContent = "Play Again";
  // add attribute to button to refresh page 
  // code from https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/
  btn.setAttribute("onclick", "location.reload()");
  // add button inside the element you passed
  element.appendChild(btn);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isUserRight = checkAnswer(userInput.value, question.name);
  displayAnswer(answerH2, question.name, imgDiv);
  if (!isClick) {
    form.prepend(showResults(isUserRight));
    isClick = true;
    displayReplayBtn(form);
  }
});
