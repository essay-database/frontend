import faker from 'faker';
import {
  NUM_ARTICLES,
  STATUSES,
  TAGS,
  NUM_YEARS_BACK,
  COLLEGES
} from '../constants';
import {
  selectRandom,
  getRandomInt
} from '../utils';

const RECENT_DAYS = 30;
const NUM_PARAGRAPHS = 15;
const RANDOM_CEILING = 300;

const SEARCH_PHOTO = (...searches) => `https://source.unsplash.com/featured/?${searches.join(',')},sig=${getRandomInt(0, RANDOM_CEILING)}`;
const RANDOM_PHOTO = () => `https://source.unsplash.com/random?sig=${getRandomInt(0, RANDOM_CEILING)}`;
const LOREM_PICSUM = () => `https://picsum.photos/1920/1080/?random`;



let idx = 0;
export default Array.from(Array(NUM_ARTICLES), () => ({
  id: (idx++).toString(),
  paragraphs: denseParagraphs(
    faker.lorem.paragraphs(NUM_PARAGRAPHS).split('. '),
    4
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
  imageLink: RANDOM_PHOTO(),
  facebookShareLink: faker.internet.url(),
  twitterShareLink: faker.internet.url()
}));

function denseParagraphs(paragraphs, num) {
  const result = [];
  for (let i = 0; i < paragraphs.length; i += num) {
    let p = '';
    for (let j = 0; j < num; j++) {
      p += paragraphs[j] + '. ';
    }
    result.push(p);
  }
  return result;
}