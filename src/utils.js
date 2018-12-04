export function selectRandom(array) {
  return array[getRandomInt(0, array.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const statusClass = status => {
  let classname = "uk-label-";
  switch (status) {
    case "accepted":
      classname += "success";
      break;
    case "rejected":
      classname += "danger";
      break;
    case "waitlisted":
      classname += "warning";
      break;
    case "pending":
      classname += "default";
      break;
    default:
      classname += "default";
      break;
  }
  return classname;
};

const shuffle = array => array.sort(() => 0.5 - Math.random());
const select = (shuffled, n) => shuffled.slice(0, n);
export const shuffleSelect = (array, n) => select(shuffle(array), n);
