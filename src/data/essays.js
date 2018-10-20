import faker from 'faker';
import {
  NUM_ARTICLES,
  STATUSES,
  TAGS,
  NUM_YEARS_BACK,
  COLLEGES,
  WIDTH,
  HEIGHT,
} from "../constants";
import {
  selectRandom,
  getRandomInt
} from "../utils";

const RECENT_DAYS = 30;
let idx = 0
export default Array.from(Array(NUM_ARTICLES), () =>
  ({
    id: (idx++).toString(),
    paragraphs: faker.lorem.paragraphs(15).split('. '),
    prompt: faker.lorem.paragraph(),
    college: selectRandom(COLLEGES),
    country: faker.address.country(),
    yearApplied: faker.date.past(getRandomInt(0, NUM_YEARS_BACK)).getFullYear(),
    author: faker.name.findName(),
    email: faker.internet.email(),
    applicationStatus: selectRandom(STATUSES),
    tag: selectRandom(TAGS),
    dateUploaded: faker.date.recent(RECENT_DAYS),
    imageLink: faker.image.people(WIDTH, HEIGHT),
    facebookShareLink: faker.internet.url(),
    twitterShareLink: faker.internet.url()
  }));