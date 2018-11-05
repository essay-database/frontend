export function selectRandom(array) {
  return array[getRandomInt(0, array.length)];
}
//The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const shuffle = array => array.sort(() => 0.5 - Math.random());
const select = (shuffled, n) => shuffled.slice(0, n);
export const shuffleSelect = (array, n) => select(shuffle(array), n);

export function intercept(axios) {
  axios.interceptors.request.use(request => {
    console.log("Request", request);
    return request;
  });

  axios.interceptors.response.use(response => {
    console.log("Response:", response);
    return response;
  });
}
