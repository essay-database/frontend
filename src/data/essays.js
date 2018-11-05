import { selectRandom } from "../utils";
import IMAGES from "../data/picsum.json";

const RECENT_DAYS = 30;
const WIDTH = 1920;
const HEIGHT = WIDTH / 2;

function picsum() {
  const images = IMAGES.map(img => img.id);
  return function() {
    return `https://picsum.photos/${WIDTH}/${HEIGHT}?image=${selectRandom(
      images
    )}`;
  };
}

function getTag(essay) {
  if (essay.featured) return "featured";
  if (essay.dateUploaded <= RECENT_DAYS) return "new";
  return "popular";
}

const getImage = picsum();
export function formatEssay(essay) {
  return {
    ...essay,
    tag: getTag(essay),
    imageLink: getImage(),
    facebookShareLink: "#",
    twitterShareLink: "#"
  };
}
