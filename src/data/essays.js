import faker from 'faker';
import {
  NUM_ARTICLES,
  STATUSES,
  TAGS,
  NUM_YEARS_BACK,
  COLLEGES
} from "../constants";

import {
  selectRandom
} from "../utils";

export default Array.from(Array(NUM_ARTICLES), () =>
  ({
    id: faker.random.uuid(),
    paragraphs: faker.lorem.paragraphs(),
    prompt: faker.lorem.paragraph(),
    college: selectRandom(COLLEGES),
    yearApplied: faker.date.past(Array.from(Array(NUM_YEARS_BACK).keys())),
    author: faker.name.findName(),
    email: faker.internet.email(),
    applicationStatus: selectRandom(STATUSES),
    tag: selectRandom(TAGS),
    dateUploaded: faker.date.recent(),
    imageNo: IMAGE_IDS.then(ids => {
      return selectRandom(ids);
    })

  }))