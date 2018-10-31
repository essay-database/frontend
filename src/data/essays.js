import faker from "faker";
import {
  NUM_ARTICLES,
  STATUSES,
  TAGS,
  NUM_YEARS_BACK,
  COLLEGES
} from "../constants";
import { selectRandom, getRandomInt } from "../utils";
import IMAGES from "../data/picsum.json";

const RECENT_DAYS = 30;
const NUM_PARAGRAPHS = 15;
const WIDTH = 1920;
const HEIGHT = WIDTH / 2;

faker.seed(321);
function picsum() {
  const images = IMAGES.map(img => img.id);
  return function* selectImage() {
    yield `https://picsum.photos/${WIDTH}/${HEIGHT}?image=${
      images[faker.random.number(images.length - 1)]
    }`;
  };
}

const GET_IMAGE = picsum();
faker.seed(123);
export default Array.from(Array(NUM_ARTICLES), () => ({
  id: faker.random.uuid(),
  paragraphs: denseParagraphs(
    faker.lorem.paragraphs(NUM_PARAGRAPHS).split(". "),
    5
  ),
  prompt: faker.lorem.paragraph(),
  college: selectRandom(COLLEGES),
  country: faker.address.country(),
  yearApplied: faker.date.past(getRandomInt(0, NUM_YEARS_BACK)).getFullYear(),
  author: faker.name.findName(),
  email: faker.internet.email(),
  applicationStatus: selectRandom(STATUSES),
  tag: selectRandom(TAGS),
  dateUploaded: faker.date.recent(RECENT_DAYS),
  imageLink: GET_IMAGE().next().value,
  facebookShareLink: faker.internet.url(),
  twitterShareLink: faker.internet.url()
}));

function denseParagraphs(paragraphs, num) {
  const result = [];
  for (let i = 0; i < paragraphs.length; i += num) {
    let p = "";
    for (let j = 0; j < num; j++) {
      p += paragraphs[j] + ". ";
    }
    result.push(p);
  }
  return result;
}
