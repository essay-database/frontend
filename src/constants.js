import { selectRandom } from "./utils";

export const FACEBOOK_PAGE_LINK = "https://twitter.com/essaydb";
export const TWITTER_PAGE_LINK = "https://facebook.com/essaydb";
export const FACEBOOK_SHARE_LINK = `https://www.facebook.com/dialog/share?app_id=1298099583680280&href=www.essaydatabase.org&quote=checkout%20essaydb%20for%20college%20application%20essays
`;
export const TWITTER_SHARE_LINK = `https://twitter.com/intent/tweet?url=www.essaydatabase.org&text=checkout%20essaydb%20for%20college%20application%20essays&hashtags=essaydb
`;

const BASE_URL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "http://essaydatabase.org:8080";
export const API_URL = BASE_URL + "/essays";
export const PAGE_URL = BASE_URL + "/pages";

export const NUM_FEATURED = 3;
export const IMAGE_POSITION = "right";
export const SHOW_PROMPTS = false;

const IMAGES = [];
importAll(require.context("./images", true, /\.jpg$/));
function importAll(r) {
  r.keys().forEach(key => IMAGES.push(r(key)));
}

export const UPLOAD_IMAGE = selectRandom(IMAGES);
export { default as LOGO_IMAGE } from "./icons/logo.png";
export const LOGO_WIDTH = 140;
export const LOGO = "essaydb";
export const COPYRIGHT = `© ${new Date().getFullYear()} ${LOGO}`;
export const ABOUT =
  "Collection of college application essays and personal statements.";
export const UPLOAD_TITLE = "Share with the world!";
