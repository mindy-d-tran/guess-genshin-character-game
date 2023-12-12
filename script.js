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
  new Answer(["Diluc"], "./img/diluc.png"),
  new Answer(["Alhaitham"], "./img/alhaitham.png"),
  new Answer(["Ayaka", "Kamisato"], "./img/ayaka.png"),
  new Answer(["Childe", "Tartaglia", "Ajax"], "./img/childe.png"),
  new Answer(["Hu", "Tao", "HuTao"], "./img/hutao.png"),
  new Answer("Kaveh", "./img/kaveh.png"),
  new Answer(["Kokomi", "Sangonomiya"], "./img/kokomi.png"),
  new Answer(["Neuvillette"], "./img/neuvillette.png"),
  new Answer(
    ["Raiden", "Shougun", "Shogun", "Shoogun", "Ei"],
    "./img/raiden.png"
  ),
  new Answer(["Xiao"], "./img/xiao.png"),
  new Answer(["Yae", "Miko", "yaemiko"], "./img/yaemiko.png"),
  new Answer(["Yoimiya", "Naganohara"], "./img/yoimiya.png"),
  new Answer(["Zhongli"], "./img/zhongli.png"),
];

// document elements
const answerArea = document.querySelector("#answer-area");
// paragraph in answer area
const answerH2 = answerArea.lastChild;
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

setUpGame(imgDiv, answerH2, question.imgSrc);

// function to set up game
function setUpGame (imgDiv, answerText, imgSrc){ 
  answerText.textContent = "???"
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
  return answer.toLowerCase().includes(userGuess.toLowerCase());
}
function displayName(answerText, answer){
  if(answer.length > 1){
    answerText.textContent = answer[0];
  } else{
    const [first, last] = [answer[0], answer[1]];
    answer.answerText = `${first} ${last}`;
  }
}
//show if the user won 
function showResults(result){
  const h2 = document.createElement("h2");
  if(result){
    h2.textContent = "You won!! Play again?";
  } else {
    h2.textContent = "You lost!! Play again?";
  }
  displayName(answerH2, question);
  return h2;

}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isUserRight = checkAnswer(userInput.value, question.name);
  form.prepend(showResults(isUserRight));
});
