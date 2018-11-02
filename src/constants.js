import PropTypes from "prop-types";
import US_COLLEGES_UNIVERSITIES from "./data/us_colleges_univerisities.json";
import { selectRandom } from "./utils";

export const NUM_ARTICLES = 12;
export const NUM_YEARS_BACK = 100;
export const FACEBOOK_PAGE_LINK = "#";
export const TWITTER_PAGE_LINK = "#";
export const ESSAYS_INDEX = "/essays";
export const NUM_FEATURED = 3;

const IMAGES = [];
importAll(require.context("./images", true, /\.jpg$/));
function importAll(r) {
  r.keys().forEach(key => IMAGES.push(r(key)));
}
export const UPLOAD_IMAGE = selectRandom(IMAGES);
// app info
export { default as LOGO_IMAGE } from "./icons/logo.png";
export { default as LOGO_IMAGE_LIGHT } from "./icons/logo-white.png";
export const LOGO_WIDTH = 150;
export const LOGO = "essay db";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${LOGO}`;
export const ABOUT =
  "Compiling a global collection of college application essays and personal statements.";
export const UPLOAD_TITLE = "Share with the world!";
// options
export const TAGS = ["new", "popular", "featured"].sort();
export const STATUSES = [
  "pending",
  "accepted",
  "rejected",
  "waitlisted"
].sort();
export const COLLEGES = US_COLLEGES_UNIVERSITIES.map(
  college => college.institution
).sort();
export const ESSAYS_SHAPE = PropTypes.shape({
  id: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prompt: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  yearApplied: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  applicationStatus: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  dateUploaded: PropTypes.instanceOf(Date),
  imageLink: PropTypes.string.isRequired,
  facebookShareLink: PropTypes.string.isRequired,
  twitterShareLink: PropTypes.string.isRequired
}).isRequired;
