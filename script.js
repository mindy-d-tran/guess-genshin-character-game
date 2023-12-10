//styling page
// temp to see the layout of page
const img = document.querySelector(".img-area img");
changeImgSrc(img, "./img/kaveh.png");

function changeImgSrc(img, imgSrc) {
  img.setAttribute("src", imgSrc);
}
//game section

const answerBank = [
  {
    name: "diluc",
    imgSrc: "./img/diluc.png",
  },
  {
    name: "kaveh",
    imgSrc: "./img/kaveh.png",
  },
  {
    name: "zhongli",
    imgSrc: "./img/zhongli.png",
  },
  {
    name: "neuvillette",
    imgSrc: "./img/neuvillette.png",
  },
  {
    name: "raiden shougun",
    imgSrc: "./img/raiden.png"
  }
];
// store index of random answer
const index = getRandomIndex(answerBank);
// store answer
const answer = answerBank[index].name;

function getRandomIndex(arr) {
  /*Use Math.random() to generate random number (returns a float, aka a number with decimal points)
   * Multiply Math.random() by array's length to pick a number from 0 to array's length-1 (still a float)
   * Use Math.floor to round it to the nearest whole number
   * Return that number so we can access a random element in the array.
   */
  return Math.floor(Math.random() * arr.length);
}
