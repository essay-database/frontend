import faker from "faker";
import axios from "axios";
import countriesData from "country-list";

// helper
const convertToOptions = arr =>
  arr.map(item => ({
    label: item,
    value: item
  }));

// app info
export const logo = "essayDB";
export const copyright = `© ${new Date().getFullYear()} essayDB`;
export const slogan2 = "a college essay database";
export const slogan = "A Global Collection of College Essays";

// options
export const tags = ["new", "trending", "popular", `editors' pick`, null];

export const statuses = [
  "Pending",
  "Accepted",
  "Rejected",
  "Deferred",
  "Waitlisted",
  "Other"
];
export const statusesOptions = convertToOptions(statuses);

export const prompts = [
  "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.",
  "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?",
  "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?",
  "Describe a problem you've solved or a problem you'd like to solve. It can be an intellectual challenge, a research query, an ethical dilemma - anything that is of personal importance, no matter the scale. Explain its significance to you and what steps you took or could be taken to identify a solution.",
  "Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.",
  "Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?",
  "Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.",
  "Other"
];
export const promptsOptions = convertToOptions(prompts);

// TODO
export const authors = ((num = 10) =>
  Array.from(Array(num), () => faker.name.findName()))();
export const authorsOptions = convertToOptions(authors);

export const countriesOptions = countriesData()
  .getData()
  .map(country => ({
    value: country.code,
    label: country.name
  }));

// TODO

export const years = (function () {
  const yearCount = 12;
  const years = [];
  let y = new Date().getFullYear();
  for (let i = 0; i < yearCount; i++) {
    years.push(y.toString());
    y -= 1;
  }
  return [...years, `before ${y}`];
})();
export const yearsOptions = convertToOptions(years);

export function searchCollegeOptions(name) {
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

export const imageIDs = axios
  .get("https://picsum.photos/list")
  .then(res => res.data)
  .then(images => images.map(i => i.id))
  .catch(function () {
    console.error("error");
  });

// other
export const emptyFunc = () => {};
export const emptyObj = {};
export const dateFormat = "MMM D YYYY";
export const numGridArticles = 30;
export const maxImages = 1084;

export const acceptedFileTypes = [
  ".doc",
  ".docx",
  ".xml",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/pdf"
].join(",");