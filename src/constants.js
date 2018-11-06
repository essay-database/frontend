import { selectRandom } from "./utils";

export const FACEBOOK_PAGE_LINK = "#";
export const TWITTER_PAGE_LINK = "#";

export const FETCH_URL = "https://cryptic-anchorage-38373.herokuapp.com/essays";
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
export const LOGO_WIDTH = 140;
export const LOGO = "essay db";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${LOGO}`;
export const ABOUT =
  "Compiling a global collection of college application essays and personal statements.";
export const UPLOAD_TITLE = "Share with the world!";
export const LOADING_DELAY = 600;
