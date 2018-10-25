import PropTypes from 'prop-types';
import COUNTRIES_LIST from './data/countries.json';
import US_COLLEGES_UNIVERSITIES from './data/us_colleges_univerisities.json';
import STATES_LIST from './data/states.json'

export const EMPTY_FUNC = () => {};
export const EMPTY_OBJ = {};
export const NUM_ARTICLES = 40;
export const NUM_YEARS_BACK = 100;
export const FACEBOOK_PAGE_LINK = '#';
export const TWITTER_PAGE_LINK = '#';
export {
  default as UPLOAD_IMAGE
}
from './images/edited/pic5.jpg';
export {
  default as IMAGE_PATH
}
from './images/pic7.jpg'
export const ACCEPTED_FILE_TYPES = [
  ".doc",
  ".docx",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/pdf"
].join(",");

// app info
export const LOGO = "essay db";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${LOGO}`;
// export const SLOGAN = "collection of college application essays";
export const ABOUT = `Compiling a global collection of college application essays and personal statements.`;

// options
export const TAGS = ["new", "popular", "featured"].sort();

export const STATUSES = [
  "pending",
  "accepted",
  "rejected",
  "waitlisted"
].sort();

export const COLLEGES = US_COLLEGES_UNIVERSITIES.map(college => college.institution).sort();

export const COUNTRIES = COUNTRIES_LIST.map(elem => elem.name).sort();

export const STATES = STATES_LIST.map(elem => elem.name).sort();

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
  twitterShareLink: PropTypes.string.isRequired,
}).isRequired;