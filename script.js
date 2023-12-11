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

//styling page
// temp to see the layout of page
const img = document.querySelector(".img-area img");
changeImgSrc(img, "./img/kaveh.png");

function changeImgSrc(img, imgSrc) {
  img.setAttribute("src", imgSrc);
}

//game section
const answerArea = document.querySelector("#answer-area");
const answerP = answerArea.lastChild;
answerP.textContent = "???";
// some of the names are arrays because the character have multiple names
const answerBank = [
  new Answer("diluc", "./img/diluc.png"),
  new Answer("alhaitham", "./img/alhaitham.png"),
  new Answer(["ayaka", "kamisato"], "./img/ayaka.png"),
  new Answer(["child", "tartaglia", "ajax"], "./img/childe.png"),
  new Answer(["hutao", "hu", "tao"], "./img/hutao.png"),
  new Answer("kaveh", "./img/kaveh.png"),
  new Answer(["kokomi", "sangonomiya"], "./img/kokomi.png"),
  new Answer("neuvillette", "./img/neuvillette.png"),
  new Answer(
    ["raiden", "shougun", "shogun", "shoogun", "ei"],
    "./img/raiden.png"
  ),
  new Answer("xiao", "./img/xiao.png"),
  new Answer(["yae", "miko", "yaemiko"], "./img/yaemiko.png"),
  new Answer(["yoimiya", "naganohara"], "./img/yoimiya.png"),
  new Answer("zhongli", "./img/zhongli.png"),
];

// store randomly generated question bank
const questionsBank = createQuestionBank(answerBank);
// store current question;
let currentQuestion = 0;
let userScore = 0;
const testAnswer = "kaveh";
const form = document.getElementById("user-guess-form");
const userInput = document.getElementById("user-guess");
const btn = document.querySelector("button");

// create random questions
function createQuestionBank(answerBank) {
  const questionBankIndexes = [];
  const questionsBank = [];
  // add random indexes into questionBankIndexes
  while (questionBankIndexes.length < 5) {
    const index = getRandomIndex(answerBank);
    // checks if arr already contains index (don't want duplicates)
    if (!questionBankIndexes.includes(index)) {
      questionBankIndexes.push(index);
    }
  }
  // add information into questionsBank
  questionBankIndexes.forEach((index) => questionsBank.push(answerBank[index]));
  return questionsBank;
}
// check if the user is right or wrong
function checkAnswer(userGuess, answer) {
  return userGuess.toLowerCase() === answer

}
function updateUserScore(isUserCorrect){
    isUserCorrect ? userScore+=100 : userScore-=50;
}
//gets random index
function getRandomIndex(arr) {
  /*Use Math.random() to generate random number (returns a float, aka a number with decimal points)
   * Multiply Math.random() by array's length to pick a number from 0 to array's length-1 (still a float)
   * Use Math.floor to round it to the nearest whole number
   * Return that number so we can access a random element in the array.
   */
  return Math.floor(Math.random() * arr.length);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  updateUserScore(checkAnswer(userInput.value, testAnswer));
});
