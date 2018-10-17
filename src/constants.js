import PropTypes from 'prop-types';

export const EMPTY_FUNC = () => {};
export const EMPTY_OBJ = {};
export const NUM_ARTICLES = 500;
export const NUM_YEARS_BACK = 100;
export const ACCEPTED_FILE_TYPES = [
  ".doc",
  ".docx",
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

const MAX_TRIES = 5;

function getImage(tries = 0) {
  return new Promise((resolve, reject) => {
    axios.get('https://source.unsplash.com/random').then(res => resolve(res.data)).catch(err => {
      if (tries == MAX_TRIES) {
        return reject(err);
      }
      console.error(` error happened: ${err}. \n now retyring`);
      return getImage(tries + 1);
    })
  });
}

export async function getImages() {
  return await Promise.all(
    Array(NUM_ARTICLES).keys().map(idx => getImage())
  );
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
}).isRequired;

// TODO LEGACY
function getSearchResults(collegeName) {
  if (!collegeName) {
    return Promise.resolve({
      options: []
    });
  }
  return axios
    .get(`https://universities.hipolabs.com/search?name=${collegeName}`)
    .then(res => JSON.parse(res))
    .then(data => data.data.map(c => c.name))
    .then(options => ({
      options
    }))
    .catch(err => console.error(err));
}

function _getImages() {
  axios
    .get("https://picsum.photos/list")
    .then(res => res.data)
    .catch(function () {
      console.error("error");
    });
}