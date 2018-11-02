import faker from "faker";
import IMAGES from "../data/picsum.json";

const RECENT_DAYS = 30;
const WIDTH = 1920;
const HEIGHT = WIDTH / 2;

function* picsum() {
  const images = IMAGES.map(img => img.id);
  yield `https://picsum.photos/${WIDTH}/${HEIGHT}?image=${
    images[faker.random.number(images.length - 1)]
  }`;
}

function getTag(essay) {
  if (essay.featured) return "featured";
  if (essay.dateUploaded <= RECENT_DAYS) return "new";
  return "popular";
}

const getImage = picsum();

export function formatEssay(essay) {
  return Object.assign(essay, {
    tag: getTag(essay),
    imageLink: getImage.next().value,
    facebookShareLink: "#",
    twitterShareLink: "#"
  });
}
