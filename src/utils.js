export function selectRandom(array) {
  return array[getRandomInt(0, array.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const shuffle = array => array.sort(() => 0.5 - Math.random());
const select = (shuffled, n) => shuffled.slice(0, n);
export const shuffleSelect = (array, n) => select(shuffle(array), n);
