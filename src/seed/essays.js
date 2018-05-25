import essay from "./essay";
import {
  numGridArticles,
  statuses,
  tags,
  imageIDs
} from "../constants";

import momentRandom from "moment-random";

import {
  ID,
  selectRandom
} from "../utils";

export default Array.from(Array(numGridArticles), () =>
  Object.assign({}, essay, {
    id: ID(),
    meta: {
      ...essay.meta,
      applicationStatus: selectRandom(statuses),
      tag: selectRandom(tags),
      dateUploaded: momentRandom(),
      imageNo: imageIDs.then(ids => {
        return selectRandom(ids);
      })
    }
  })
);