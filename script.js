const answerBank = [
  // index: 0
  {
    name: "pikachu",
    imgSrc:
      "https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg",
  },
  // index: 1
  {
    name: "togepi",
    imgSrc:
      "https://facts.net/wp-content/uploads/2023/07/16-facts-about-togepi-1689384445.jpg",
  },
  // index: 2
  {
    name: "electrode",
    imgSrc:
      "https://www.pcinvasion.com/wp-content/uploads/2023/01/pokemon-scarlet-violet-evolve-voltorb-into-electrode-result.jpg?fit=1200%2C675",
  },
  {
    name: "eevee",
    imgSrc:
      "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/software/switch/70010000000450/e8e1f203fc2d8ead2c7542e78e97675a01c0291180a7b8e1afe0d1488b05ada9",
  },
];
// store index of random answer
const index = getRandomIndex(pokemonList);
// store answer
const answer = pokemonList[index].name;



function getRandomIndex(arr) {
    /*Use Math.random() to generate random number (returns a float, aka a number with decimal points)
     * Multiply Math.random() by array's length to pick a number from 0 to array's length-1 (still a float)
     * Use Math.floor to round it to the nearest whole number
     * Return that number so we can access a random element in the array.
     */
    return Math.floor(Math.random() * arr.length);
  }