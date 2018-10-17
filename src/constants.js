import PropTypes from 'prop-types';
import axios from "axios";

export const EMPTY_FUNC = () => {};
export const EMPTY_OBJ = {};
export const DATE_FORMAT = "MMM D YYYY";
export const NUM_ARTICLES = 30;
export const NUM_YEARS_BACK = 12;
export const ACCEPTED_FILE_TYPES = [
  ".doc",
  ".docx",
  ".xml",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/pdf"
].join(",");

// app info
export const LOGO = "essay database";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${LOGO}`;
export const SLOGAN = "collection of college application essays";

// options
export const TAGS = ["new", "popular", "featured"];

export const STATUSES = [
  "pending",
  "accepted",
  "rejected",
  "waitlisted"
];

// TODO LEGACY
// export function SEARCH_COLLEGE_OPTIONS(name) {
//   if (!name) {
//     return Promise.resolve({
//       options: []
//     });
//   }
//   return axios
//     .get(`https://universities.hipolabs.com/search?name=${name}`)
//     .then(res => JSON.parse(res))
//     .then(data => data.data.map(c => c.name))
//     .then(colleges => convertToOptions(colleges))
//     .then(options => ({
//       options
//     }))
//     .catch(err => console.error(err));
// }

// export const IMAGE_IDS = axios
//   .get("https://picsum.photos/list")
//   .then(res => res.data)
//   .then(images => images.map(i => i.id))
//   .catch(function () {
//     console.error("error");
//   });

export const ESSAYS_SHAPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  meta: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    yearApplied: PropTypes.number.isRequired,
    applicationStatus: PropTypes.string.isRequired,
    dateUploaded: PropTypes.object.isRequired,
    views: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    imageNo: PropTypes.object.isRequired
  }),
  links: PropTypes.shape({
    linkFacebookShare: PropTypes.string.isRequired,
    linkTwitterShare: PropTypes.string.isRequired,
    linkBasedOnAuthor: PropTypes.string.isRequired,
    linkBasedOnYearApplied: PropTypes.string.isRequired,
    linkBasedOnCountry: PropTypes.string.isRequired,
    linkBasedOnApplicationStatus: PropTypes.string.isRequired,
    linkBasedOnCollege: PropTypes.string.isRequired,
    linkBasedOnPrompt: PropTypes.string.isRequired
  }),
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
}).isRequired;