import faker from 'faker';
import momentRandom from "moment-random";

import {
  NUM_ARTICLES,
  STATUSES,
  TAGS,
  IMAGE_IDS
} from "../constants";

import {
  ID,
  selectRandom
} from "../utils";

export default Array.from(Array(NUM_ARTICLES), () =>
  ({
    id: faker.random.uuid(),
    paragraphs: faker.lorem.paragraphs(),
    prompt: faker.lorem.paragraph(),
    college: selectRandom(),
    yearApplied: faker.date.past(),
    author: faker.name.findName(),
    email: faker.internet.email(),
    applicationStatus: selectRandom(STATUSES),
    tag: selectRandom(TAGS),
    dateUploaded: faker.date.recent(),
    imageNo: IMAGE_IDS.then(ids => {
      return selectRandom(ids);
    })

  }))