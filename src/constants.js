import PropTypes from 'prop-types';
import faker from "faker";
import axios from "axios";
import countriesData from "country-list";

// helper
const convertToOptions = arr =>
  arr.map(item => ({
    label: item,
    value: item
  }));

// TODO convert to ALL CAPS
// app info
export const LOGO = "essay database";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${LOGO}`;
export const SLOGAN = "global collection of college application essays";
export const ABOUT = "loremIncididunt duis Lorem veniam anim consequat aliquip Lorem in nostrud officia. Consectetur proident aliquip sunt exercitation non id voluptate fugiat velit ut qui exercitation sunt non. Deserunt aliqua deserunt eu mollit do proident Lorem deserunt ullamco. Excepteur adipisicing nulla et mollit non exercitation fugiat proident quis. Nostrud ad veniam excepteur consectetur excepteur commodo. Dolore deserunt eiusmod enim amet ullamco labore in proident culpa. Elit velit fugiat consequat enim ipsum reprehenderit."

// options
export const TAGS = ["new", "popular", `editors' pick`, ''];

export const STATUSES = [
  "Pending",
  "Accepted",
  "Rejected",
  "Waitlisted"
];
export const STATUSES_OPTIONS = convertToOptions(STATUSES);

export const PROMPTS = [
  "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.",
  "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?",
  "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?",
  "Describe a problem you've solved or a problem you'd like to solve. It can be an intellectual challenge, a research query, an ethical dilemma - anything that is of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution.",
  "Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.",
  "Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?",
  "Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.",
  "Other"
];
export const PROMPTS_OPTIONS = convertToOptions(PROMPTS);

// TODO
export const AUTHORS = ((num = 10) =>
  Array.from(Array(num), () => faker.name.findName()))();
export const AUTHORS_OPTIONS = convertToOptions(AUTHORS);

export const COUNTRIES_OPTIONS = countriesData()
  .getData()
  .map(country => ({
    value: country.code,
    label: country.name
  }));

// TODO
export const YEARS = (function () {
  const yearCount = 12;
  const years = [];
  let y = new Date().getFullYear();
  for (let i = 0; i < yearCount; i++) {
    years.push(y.toString());
    y -= 1;
  }
  return [...years, `before ${y}`];
})();
export const YEARS_OPTIONS = convertToOptions(YEARS);

export function SEARCH_COLLEGE_OPTIONS(name) {
  if (!name) {
    return Promise.resolve({
      options: []
    });
  }
  return axios
    .get(`https://universities.hipolabs.com/search?name=${name}`)
    .then(res => JSON.parse(res))
    .then(data => data.data.map(c => c.name))
    .then(colleges => convertToOptions(colleges))
    .then(options => ({
      options
    }))
    .catch(err => console.log(err));
}

// TODO incase of failure
export const IMAGE_IDS = axios
  .get("https://picsum.photos/list")
  .then(res => res.data)
  .then(images => images.map(i => i.id))
  .catch(function () {
    console.error("error");
  });

// other
export const EMPTY_FUNC = () => {};
export const EMPTY_OBJ = {};
export const DATE_FORMAT = "MMM D YYYY";
export const NUM_GRID_ARTICLES = 30;
export const MAX_IMAGES = 1084;
export const ACCEPTED_FILE_TYPES = [
  ".doc",
  ".docx",
  ".xml",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/pdf"
].join(",");

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