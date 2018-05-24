import moment from "moment";

export const getRelativeDate = (date = moment()) => date.fromNow();

export const selectRandom = arr => arr[Math.floor(Math.random() * arr.length)];

function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

const gen = idMaker();
export const ID = () => gen.next().value;
