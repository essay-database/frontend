export function selectRandom(array) {
  return array[getRandomInt(0, array.length)];
}

//The maximum is exclusive and the minimum is inclusive
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}