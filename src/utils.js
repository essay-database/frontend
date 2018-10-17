import moment from "moment";

export const getRelativeDate = (date = moment()) => date.fromNow();

export const selectRandom = arr => arr[Math.floor(Math.random() * arr.length)];

function* IDMaker() {
  var index = 0;
  while (true) yield index++;
}

const gen = IDMaker();
export const ID = () => gen.next().value;