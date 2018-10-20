import PropTypes from 'prop-types';
import axios from 'axios';
import US_COLLEGES_UNIVERSITIES from './data/us_colleges.json';

export const EMPTY_FUNC = () => {};
export const EMPTY_OBJ = {};
export const WIDTH = 1800;
export const HEIGHT = WIDTH / 2;
export const NUM_ARTICLES = 40;
export const NUM_YEARS_BACK = 100;
export const FACEBOOK_PAGE_LINK = '';
export const TWITTER_PAGE_LINK = '';
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
export const ABOUT = ` Compiling a global collection of college application essays and personal statements.`;

// options
export const TAGS = ["new", "popular", "featured"];

export const STATUSES = [
  "pending",
  "accepted",
  "rejected",
  "waitlisted"
];

export const COLLEGES = US_COLLEGES_UNIVERSITIES.map(college => college.institution);

const MAX_TRIES = 3;

export function GET_IMAGE(tries = 0) {
  return new Promise((resolve, reject) => {
    axios.get('https://source.unsplash.com/random').then(res => resolve(res.data)).catch(err => {
      if (tries === MAX_TRIES) {
        return reject(err);
      }
      console.error(` error happened: ${err}. \n now retrying`);
      return GET_IMAGE(tries + 1);
    })
  });
}

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

// TODO LEGACY
// function getSearchResults(collegeName) {
//   if (!collegeName) {
//     return Promise.resolve({
//       options: []
//     });
//   }
//   return axios
//     .get(`https://universities.hipolabs.com/search?name=${collegeName}`)
//     .then(res => JSON.parse(res))
//     .then(data => data.data.map(c => c.name))
//     .then(options => ({
//       options
//     }))
//     .catch(err => console.error(err));
// }

// function _getImages() {
//   axios
//     .get("https://picsum.photos/list")
//     .then(res => res.data)
//     .catch(function () {
//       console.error("error");
//     });
// }