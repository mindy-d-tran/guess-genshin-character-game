// class to make answer object
class Answer {
  #name;
  #imgSrc;
  #winAudio;
  #loseAudio;
  constructor(name, imgSrc, audioWin, audioLose) {
    this.#name = name;
    this.#imgSrc = imgSrc;
    this.#winAudio = audioWin;
    this.#loseAudio = audioLose;
  }
  get name() {
    return this.#name;
  }
  get imgSrc() {
    return this.#imgSrc;
  }
  get winAudio() {
    return this.#winAudio;
  }
  get loseAudio(){
    return this.#loseAudio;
  }
}

//game section
// some of the names are arrays because the character have multiple names
const answerBank = [
  new Answer(
    ["alhaitham"],
    "./img/alhaitham.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/a/a3/VO_Alhaitham_Hello.ogg"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/e/e6/VO_Alhaitham_Ally_at_Low_HP_02.ogg/"
  ),
  new Answer(
    ["ayaka", "kamisato"],
    "./img/ayaka.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/b/b8/VO_Kamisato_Ayaka_Hello.ogg"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/a/a1/VO_Kamisato_Ayaka_Heavy_Hit_Taken_02.ogg/"
  ),
  new Answer(
    ["childe", "tartaglia", "ajax"],
    "./img/childe.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/VO_Tartaglia_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/9/91/VO_Tartaglia_Ally_at_Low_HP_01.ogg/"
  ),
  new Answer(
    ["diluc"],
    "./img/diluc.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/6/63/VO_Diluc_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/3/3d/VO_Diluc_Elemental_Burst_02.ogg/"
  ),
  new Answer(
    ["hu", "tao", "hutao"],
    "./img/hutao.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/2/28/VO_Hu_Tao_Hello.ogg"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/7/75/VO_Hu_Tao_Low_HP_01.ogg/"
  ),
  new Answer(
    ["kaveh"],
    "./img/kaveh.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/VO_Kaveh_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/f/f3/VO_Kaveh_Low_HP_03.ogg/"
  ),
  new Answer(
    ["kokomi", "sangonomiya"],
    "./img/kokomi.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/8/8e/VO_Sangonomiya_Kokomi_Hello.ogg"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/2/29/VO_Sangonomiya_Kokomi_Low_HP_02.ogg/"
  ),
  new Answer(
    ["neuvillette"],
    "./img/neuvillette.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/5/53/VO_Neuvillette_Hello.ogg"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/7/74/VO_Neuvillette_Elemental_Skill_1_02.ogg/"
  ),
  new Answer(
    ["raiden", "shougun", "shogun", "shoogun", "ei"],
    "./img/raiden.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/VO_Raiden_Shogun_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/7/73/VO_Raiden_Shogun_Opening_Treasure_Chest_02.ogg/"
  ),
  new Answer(
    ["xiao"],
    "./img/xiao.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/VO_Xiao_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/2/26/VO_Xiao_Ally_at_Low_HP_01.ogg/",
    "https://static.wikia.nocookie.net/gensin-impact/images/2/26/VO_Xiao_Ally_at_Low_HP_01.ogg/"
  ),
  new Answer(
    ["yae", "miko", "yaemiko"],
    "./img/yaemiko.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/0/08/VO_Yae_Miko_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/f/f4/VO_Yae_Miko_Light_Hit_Taken_02.ogg/"
  ),
  new Answer(
    ["yoimiya", "naganohara"],
    "./img/yoimiya.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/VO_Yoimiya_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/4/42/VO_Yoimiya_Heavy_Hit_Taken_02.ogg/"
  ),
  new Answer(
    ["zhongli"],
    "./img/zhongli.png",
    "https://static.wikia.nocookie.net/gensin-impact/images/7/7b/VO_Zhongli_Hello.ogg/"
    ,"https://static.wikia.nocookie.net/gensin-impact/images/d/d9/VO_Zhongli_Heavy_Hit_Taken_01.ogg/"
  ),
];

// document elements
const questionArea = document.querySelector("#question-area");
// paragraph in question area
const answerH2 = questionArea.querySelector("h2");
// img in queestion area
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
function displayReplayBtn(element) {
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

function playAudio(result) {
  let mySound;
  // have to use sound constructor to play sound (the easy way)
  // got it from this https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
  if(result){
    mySound = new Audio(question.winAudio);
  }else{
    mySound = new Audio(question.loseAudio);
  }
  return mySound.play();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isUserRight = checkAnswer(userInput.value, question.name);
  displayAnswer(answerH2, question.name, imgDiv);
  if (!isClick) {
    form.prepend(showResults(isUserRight));
    isClick = true;
    displayReplayBtn(form);
    playAudio(isUserRight).catch;
  }
});
