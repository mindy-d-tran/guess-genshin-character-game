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

// document elements
const answerArea = document.querySelector("#answer-area");
// paragraph in answer area
const answerP = answerArea.lastChild;
// img in answer area
const imgDiv = document.querySelector(".img-area");
// form
const form = document.getElementById("user-guess-form");
// text input
const userInput = document.getElementById("user-guess");
// button
const btn = document.querySelector("button");

// store question
const question = generateQuestion(answerBank);

setUpGame(imgDiv, answerP, question.imgSrc);

// function to set up game
function setUpGame (imgDiv, p, imgSrc){ 
  p.textContent = "???"
  const imgBlur = document.createElement("img");
  const imgBlack = document.createElement("img");
  // set img src of image
  imgBlur.setAttribute("src", imgSrc);
  imgBlack.setAttribute("src", imgSrc);
  //set style of images
  imgBlur.style.filter = `blur(40px)`;
  imgBlack.classList.add("img-black");
  //append img to div
  imgDiv.appendChild(imgBlur);
  imgDiv.appendChild(imgBlack);
}
function generateQuestion(arr){
  const index = getRandomIndex(arr);
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
  return userGuess.toLowerCase() === answer;
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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if(checkAnswer(userInput.value, testAnswer)) {
    
  }
});
